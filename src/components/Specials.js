import React from 'react';
import '../styles/Specials.css';


const Specials = () => {
  const specials = [
    { name: 'Greek Salad', price: '$12.99', description: 'The famous Greek salad...', button: 'Order a delivery' },
    { name: 'Bruschetta', price: '$5.99', description: 'Our Bruschetta is made...', button: 'Order a delivery' },
    { name: 'Lemon Dessert', price: '$5.00', description: 'This comes straight from grandma\'s...', button: 'Order a delivery' },
  ];

  return (
    <div className="specials">
      <h2>Specials</h2>
      <div className="specials-list">
        {specials.map((item, index) => (
          <div key={index} className="special-item">
            <h3>{item.name} <span>{item.price}</span></h3>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specials;
