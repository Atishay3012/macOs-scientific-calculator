import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from './calculate';
import ConfettiExplosion from 'react-confetti-explosion';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [darkMode, setDarkMode] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [expression, setExpression] = useState('');

  const handleClick = (buttonName) => {
    let newExpression = expression + buttonName;

    if (buttonName === 'C') {
      setExpression('');
      setDisplayValue('0');
      return;
    }

    if (buttonName === '=') {
      const result = calculate(displayValue, buttonName);
      setDisplayValue(result);
      setExpression(result);
      checkForConfetti(expression);
    } else {
      setDisplayValue(calculate(displayValue, buttonName));
      setExpression(newExpression);
    }
  };

  const checkForConfetti = (expr) => {
    const regex = /([26]).*([26])/;
    if (regex.test(expr)) {
      setIsExploding(true);
      setTimeout(() => setIsExploding(false), 2000);
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {isExploding && <ConfettiExplosion />}
      <h1 className="app-title">MacOS Scientific Calculator</h1>
      <Display value={displayValue} />
      <ButtonPanel onClick={handleClick} />
      <div id="theme-switcher-container">
        <button className="theme-switcher" onClick={toggleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default App;
