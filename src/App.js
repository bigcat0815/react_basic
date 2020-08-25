import React ,{useState}from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';

function App() {
  
  //state 초기화
   const [ss_Subject,ss_setSubject] =useState
   ({
      title:'WEB',
      sub:'World Wide Web!'
    });

    const [ss_Content,ss_SetContent] =useState
    ([
      {id : 1, title:'HTML',desc:'HTML is HyperText...'},
      {id : 2, title:'CSS',desc:'CSS is for design'},
      {id : 3, title:'JavaScript',desc:'JS is Web'},
      ]
    );

  return (
    <div className="App">      
        <Subject title={ss_Subject.title} sub={ss_Subject.sub}></Subject>
        <TOC data={ss_Content}></TOC>
        <Content title = "HTML" desc= "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits."></Content>
    </div>
  );
}
export default App;
