import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [randomDog, setRandomDog] = useState('');
  const [btnClick, setBtnClick] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setRandomDog(data.message);
      setLoading(false);

      alert((data.message).split('/')[4]);
      localStorage.setItem('dogUrl', JSON.stringify(data.message));
    }

    fetchData();
  }, [btnClick]);

  function handleName() {
    return btnClick ? setBtnClick(false) : setBtnClick(true);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Doguinhos</h1>
      <img src={ randomDog } alt="Doguinho aleatório" />
      <button onClick={ handleName }>Novo doguinho!</button>
    </div>
  );
}

export default App;
