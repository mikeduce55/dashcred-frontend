
import React from 'react';

function Sidebar({ setView }) {
  return (
    <div style={{ width: '200px', padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <h3>DashCred</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><button onClick={() => setView('convert')}>Convert</button></li>
        <li><button onClick={() => setView('store')}>Store</button></li>
      </ul>
    </div>
  );
}

export default Sidebar;
