import React from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';


function App() {
  return (
    <div className="App">      
        <Subject title="WEB" sub="World wide web!"></Subject>
        <TOC></TOC>
        <Content title = "HTML" desc= "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits."></Content>
    </div>
  );
}
export default App;
