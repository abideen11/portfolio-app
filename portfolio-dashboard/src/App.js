import React from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Route component={Footer} />
      </div>
    </BrowserRouter>
  )
}

export default App;
