import React from 'react';
import { useState } from 'react';

export default function Item({ comprarItem, nombre, descripcion, stock }) {
  const [newStock, setNewStock] = useState(stock);

  const driverDeComprarItemAndCountItem = () => {
    setNewStock(newStock - 1);
    comprarItem();
  };

  return (
    <div className='producto'>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      {newStock > 0 ? (
        <h5> En stock:{newStock}</h5>
      ) : (
        <h5>
          En stock: <span>agotado</span>
        </h5>
      )}
      <button disabled={!newStock} onClick={driverDeComprarItemAndCountItem}>
        {newStock ? 'COMPRAR' : 'SIN STOCK'}
      </button>
    </div>
  );
}
