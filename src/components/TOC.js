import React from 'react';

function TOC(props) {  
    var lists=[];
    var tocData = props.data;
    var i = 0;
    while(i<tocData.length)
    {
        lists.push(<a role="listitem" class="item" 
        href={"/content"+tocData[i].id} data-id ={tocData[i].id} onClick={function(e) {            
            e.preventDefault();
            props.onChangePage(e.target.dataset.id);
        }}>{tocData[i].title}</a>);
        i++;
    }
    return (
      <div role="list" class="ui ordered list">
          <div role="listitem" class="item"><a>Languages</a>
              <div class="list">
                    {lists}
                </div>
          </div>
        </div>
    );
  }
  export default TOC;