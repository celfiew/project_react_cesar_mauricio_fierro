import React from 'react';
import { useState } from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

function App() {
  const [countItem, setCountItem] = useState(0);

  const comprarItem = () => {
    setCountItem(countItem + 1);
  };

  return (
    <div className='App'>
      <Cabecera cantidad={countItem} />
      <Listado comprarItem={comprarItem} />
    </div>
  );
}

export default App;
