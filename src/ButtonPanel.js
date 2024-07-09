import React from 'react';
import Button from './Button';

function ButtonPanel({ onClick }) {
  const buttons = [
    ['(', ')', 'MC', 'M+', 'M-', 'MR', 'C','+/-', '%', '/'],
    ['2nd', 'x^2', 'x^3', 'x^y', 'e^x', '10^x', '7', '8', '9', '*'],
    ['1/x', '2√x', '3√x', 'y√x', 'ln', 'log10', '4', '5', '6', '-'],
    ['x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+'],
    ['Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '=' ]
  ];

  return (
    <div className="button-panel">
      {buttons.map((row, i) => (
        <div key={i} className="button-row">
          {row.map((btn, j) => (
            btn === '0' ? (
              <Button key={i + '-' + j} name={btn} onClick={onClick} className="button-0" />
            ) : (
              <Button key={i + '-' + j} name={btn} onClick={onClick} />
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export default ButtonPanel;
