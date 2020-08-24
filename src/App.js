import React from 'react';
import './App.css';




function Subject() {
  return (
   
    <div>
   "hi"
  </div>
 )
}


function TOC() {
  return (
    <nav class="ui list">
    <div class ="item">
    <i class="linkify icon"></i>
        <li class ="content"><a href="1.html">HTML</a></li>
        {/* <li><a href="2.html">CSS</a></li>
        <li><a href="3.html">JavaScript</a></li>     */}
        </div>
    </nav>
  );
}

function Content() {
  return (

<div class="ui card" data-html="<div class='header'>User Rating</div><div class='content'><div class='ui star rating'><i class='active icon'></i><i class='active icon'></i><i class='active icon'></i><i class='active icon'></i><i class='active icon'></i></div></div>">
<div class="image">
    <img src="/images/movies/totoro-horizontal.jpg">
 </img>
 </div>

<div class="content">
    <div class="header">My Neighbor Totoro</div>
    <div class="description">
      Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits.
    </div>
  </div>


  <div class="ui two bottom attached buttons">
    <div class="ui button">
      <i class="add icon"></i>
      Queue
    </div>
    <div class="ui primary button">
      <i class="play icon"></i>
      Watch
    </div>
  </div>

  <button class="ui red basic button">Red</button>

  </div>
  );
}


function App() {
  return (
    <div className="App">      
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
    </div>
  );
}

export default App;
