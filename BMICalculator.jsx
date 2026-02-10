import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setStatus('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setStatus('Healthy');
      else if (bmiValue >= 25 && bmiValue < 29.9) setStatus('Overweight');
      else setStatus('Obese');
    }
  };

  const resetAll = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setStatus('');
  };

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center p-3' 
         style={{ 
           minHeight: '100vh', 
           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
           fontFamily: "'Poppins', sans-serif"
         }}>
      
      {/* Responsive Width Logic:
          - col-11: Mobile (default)
          - col-sm-8: Tablets
          - col-md-6: Small Laptops
          - col-lg-4: Desktop
      */}
      <div className='card border-0 shadow-lg p-3 p-md-4 col-11 col-sm-8 col-md-6 col-lg-4' 
           style={{ borderRadius: '20px' }}>
        
        <div className='card-body'>
          <h2 className='text-center fw-bold mb-4 fs-3 fs-md-2' style={{ color: '#4b39b5' }}>
            BMI Calculator
          </h2>
          
          <form onSubmit={calculateBMI}>
            <div className="mb-3">
              <label className="form-label fw-semibold text-secondary">Weight (kg)</label>
              <input 
                type="number" 
                className="form-control form-control-lg border-2 shadow-sm" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)} 
                placeholder="e.g. 70" 
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold text-secondary">Height (cm)</label>
              <input 
                type="number" 
                className="form-control form-control-lg border-2 shadow-sm" 
                value={height} 
                onChange={(e) => setHeight(e.target.value)} 
                placeholder="e.g. 170" 
              />
            </div>

            {/* Stack buttons vertically on mobile, horizontally on tablet+ */}
            <div className='row g-2'>
              <div className='col-12 col-md-8'>
                <button className='btn btn-lg w-100 text-white shadow-sm' 
                        style={{ background: '#764ba2', borderRadius: '10px' }} 
                        type='submit'>Calculate</button>
              </div>
              <div className='col-12 col-md-4'>
                <button className='btn btn-lg w-100 btn-light border shadow-sm' 
                        style={{ borderRadius: '10px' }} 
                        type="button" 
                        onClick={resetAll}>Clear</button>
              </div>
            </div>
          </form>

          {bmi && (
            <div className='mt-4 p-3 bg-light rounded-3 text-center border-start border-4 border-primary shadow-sm'>
              <h5 className='mb-1 text-muted'>Your Result</h5>
              <h3 className='fw-bold mb-0'>{bmi}</h3>
              <p className={`fw-bold mt-1 ${status === 'Healthy' ? 'text-success' : 'text-danger'}`}>
                {status}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
