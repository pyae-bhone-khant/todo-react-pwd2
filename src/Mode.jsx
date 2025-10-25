import { useState, useEffect } from 'react';

export default function Mode({ data }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="w-full flex justify-between h-15 text-center items-center px-80 card">
      <h1 className="text-3xl font-bold">Todo <span className="text-red-600">( {data.length} )</span></h1>
      <button 
        className="btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}
