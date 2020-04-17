import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import code from './Views/codes/codeCompiler';

function App() {
  return (
    <Router>
        <Route path="/" component =  { code } />
    </Router>
  );
}

export default App;
