import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Tecnologies />
    </div>
  )
};
const Header = () => {
  return (
    <div>
      <a href='#s'>Home</a>
      <a href='#s'>News Feed</a>
      <a href='#s'>Messages</a>
    </div>
  )
};
const Tecnologies = () => {
  return (
    <div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
      </ul>
    </div>
  )
};

export default App;
