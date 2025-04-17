import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Archivo CSS global que viene con Vite/React
import 'bootstrap/dist/css/bootstrap.min.css'; // <-- ¡Añade esta línea!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);