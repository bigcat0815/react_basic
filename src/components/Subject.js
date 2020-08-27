import React from 'react';

function Subject(props) 
{
  return (
    <header>
        <h1 class="ui top attached header">
          <a href="/" onClick=
          {function(e)
            {
              e.preventDefault();          
              props.onChangePage();
            }
          }>{props.title}</a></h1>
      <div class="ui attached segment"><h2 class="ui header">{props.sub}</h2></div></header>
   )
}

export default Subject;

