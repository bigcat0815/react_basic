import React from 'react';
import './App.css';

function Subject(props) {
  return (

    <header>
        <h1 class="ui top attached header">{props.title}</h1>
      <div class="ui attached segment"><h2 class="ui header">{props.sub}</h2></div></header>
    // <header>
    //     <h1 class="ui huge header">{props.title}</h1>
    //       <h3 class="ui header">  {props.sub}</h3>
    // </header>
   )
}
function TOC() {  
  return (
    <div role="list" class="ui ordered list">
        <div role="listitem" class="item"><a>Languages</a>
            <div class="list">
                <a role="listitem" class="item" href="1.html">HTML</a>
                <a role="listitem" class="item" href="2.html">Javascript</a>
                <a role="listitem" class="item" href="3.html">CSS</a>
              </div>
        </div>
      </div>
  );
}

function Content(props) {
  return (
      <div class="ui card" data-html="<div class='header'>User Rating</div><div class='content'><div class='ui star rating'><i class='active icon'></i><i class='active icon'></i><i class='active icon'></i><i class='active icon'></i><i class='active icon'></i></div></div>">
        <div class="content">
          <div class="header">{props.title}</div>
            <div class="description">
              {props.desc}
            </div>
          </div>
          <button class="ui red basic button">Red</button>
    </div>
  );
}

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
