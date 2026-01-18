import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBmi = (e) => {
    e.preventDefault();

    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obese');
      }
    } else {
      alert('Please enter valid height and weight');
    }
  };

  const reload = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="row w-100 justify-content-center">
        <div className="col-md-4 border p-4 rounded shadow bg-light">
          <h2 className="text-center mb-4">BMI Calculator</h2>
          <form onSubmit={calculateBmi}>
            <div className="mb-3">
              <label className="form-label">Weight (kg)</label>
              <input
                type="number"
                className="form-control"
                placeholder="e.g. 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Height (cm)</label>
              <input
                type="number"
                className="form-control"
                placeholder="e.g. 175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className='d-grid gap-2'>
               <button className="btn btn-primary" type="submit">Calculate BMI</button>
              <button className="btn btn-outline-secondary" type="button" onClick={reload}>Reload</button>
            </div>
          </form>

          {bmi && (
            <div className="mt-4 text-center border-top pt-3">
              <h4>Your BMI is: {bmi}</h4>
              <p className="fw-bold text-primary">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
