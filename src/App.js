
import React, { useState } from 'react';

function App() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardAmount, setCardAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleConvert = async () => {
    setSubmitting(true);
    setError('');
    setConvertedAmount(null);
    
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cardNumber,
          cardAmount,
          adminProfit: 1.50
        })
      });

      const data = await response.json();
      if (data.success) {
        setConvertedAmount(data.doorDashCredit);
      } else {
        setError(data.message || 'Conversion failed.');
      }
    } catch (err) {
      setError('Server error.');
    }

    setSubmitting(false);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', background: '#0d0d0d', color: '#fefefe', minHeight: '100vh' }}>
      <h1 style={{ color: '#ff3c3c' }}>DashCred</h1>
      <p>Turn credit into cravings. Don’t let your gift card rot.</p>

      <input
        type="text"
        placeholder="Gift Card Number"
        value={cardNumber}
        onChange={e => setCardNumber(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
      />
      <input
        type="number"
        placeholder="Gift Card Balance ($)"
        value={cardAmount}
        onChange={e => setCardAmount(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={handleConvert} disabled={submitting} style={{ padding: '0.75rem 1.5rem', background: '#ff3c3c', color: 'white', border: 'none', cursor: 'pointer' }}>
        {submitting ? 'Converting...' : 'Convert to DoorDash Credit'}
      </button>

      {convertedAmount && (
        <div style={{ marginTop: '2rem', color: '#0f0' }}>
          Success! You’ve received ${convertedAmount} in DoorDash credit.
        </div>
      )}
      {error && (
        <div style={{ marginTop: '2rem', color: '#f33' }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default App;
