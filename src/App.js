import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Convert from './Convert';
import Store from './Store';

function App() {
  const [view, setView] = useState('convert');

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar setView={setView} />
      <div style={{ padding: '2rem', flexGrow: 1 }}>
        {view === 'convert' && <Convert />}
        {view === 'store' && <Store />}
      </div>
    </div>
  );
}

export default App;
