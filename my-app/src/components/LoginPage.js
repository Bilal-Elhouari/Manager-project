import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logique d'authentification
    alert(`Connexion avec ${email}`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Connexion</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '300px' }}
      />
      <br />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '300px' }}
      />
      <br />
      <button onClick={handleLogin} style={{ padding: '10px 20px', backgroundColor: '#6A0DAD', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Se connecter
      </button>
    </div>
  );
};

export default LoginPage;
