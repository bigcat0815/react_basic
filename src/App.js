import React ,{useState}from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
//import TeachableMachine from './components/TeachableMachine';
import './App.css';

function App() {
  
  //state 초기화
  const [mode ,setmode] =useState(
    {mode :'welcome',selected_contenet_id:2}
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
      {id : 1, title:'HTML',desc:'HTML is HyperText...'},
      {id : 2, title:'CSS',desc:'CSS is for design'},
      {id : 3, title:'JavaScript',desc:'JS is Web'},
      {id : 4, title:'ML',desc:'MechineLearning'},
      ]
    );
    
    //mode 전환
    var _title ,_desc = null;
    if(mode.mode === "welcome")
    {
      _title = msg.welcome.title;
      _desc = msg.welcome.desc; 
  
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
          break;
        }
        ++i;
      }
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
        <Content title = {_title} desc= {_desc}>      
        </Content>       
    </div>)}
export default App;
