import React from 'react';
import TodoApp from './pages/TodoApp'
import Authorization from './pages/Authorization'
import { Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" component={Authorization} exact />
        <Route path="/app" component={TodoApp} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;