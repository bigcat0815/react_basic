import React ,{useState}from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent'
//import TeachableMachine from './components/TeachableMachine';
import './App.css';

function App() {
  
  //state 초기화
  var max_content_id = 3;
  const [mode ,setmode] =useState(
    {mode :'create',selected_contenet_id:2 }
  );
 
  const [msg,setmsg] =useState
  ({
    welcome:{title:'Welcome',desc:"Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits." }
  });

   const [ss_Subject,ss_setSubject] =useState
   ({
      subject: {title:'WEB' ,sub:'World Wide Web!'},      
    });
    
    const [ss_Content,ss_SetContent] =useState
    ([
      {id : 0, title:'HTML',desc:'HTML is HyperText...'},
      {id : 1, title:'CSS',desc:'CSS is for design'},
      {id : 2, title:'JavaScript',desc:'JS is Web'},
      {id : 3, title:'ML',desc:'MechineLearning'},
      ]
    );
    
    //mode 전환
    var _title ,_desc = null, _article =null;
    if(mode.mode === "welcome")
    {
      _title = msg.welcome.title;
      _desc = msg.welcome.desc; 
      _article= <ReadContent title = {_title} desc= {_desc}> </ReadContent>
  
    }
    else if(mode.mode ==='read')
    {
      var i = 0;
      while(i<ss_Content.length)
      {
        var data = ss_Content[i];
        if(data.id === mode.selected_contenet_id)
        {
          _title = data.title;
          _desc = data.desc;
          _article= <ReadContent title = {_title} desc= {_desc}> </ReadContent>
          break;
        }
        ++i;
      }
    }
    else if(mode.mode ==='create')
    {
      _article= <CreateContent onSubmit={function(Ctitle,Cdesc){
        ++max_content_id;
        var  _sscon = ss_Subject;
        _sscon[max_content_id] = {id:max_content_id ,title:Ctitle,desc:Cdesc};      
        ss_SetContent({id:_sscon.id ,title:_sscon.title,desc:_sscon.desc});
       
      }}> </CreateContent>
    }
    
  return (
    <div className="App">      
        <Subject title={ss_Subject.subject.title} sub={ss_Subject.subject.sub} onChangePage = {function()
         {
          setmode({mode: 'welcome'});
         }} ></Subject>
        <TOC data={ss_Content} onChangePage ={function(id){
           setmode({mode:'read',selected_contenet_id:Number(id)});
        }}></TOC>
        <Control onChangeMode={function(_mode){
            setmode({mode:_mode});
        }}></Control>
             {_article}
    </div>)}
export default App;
