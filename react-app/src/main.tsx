import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import MyApp from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);