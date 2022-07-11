import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
