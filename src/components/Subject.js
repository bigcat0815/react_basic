import React from 'react';

function Subject(props) {
  return (
    <header>
        <h1 class="ui top attached header">{props.title}</h1>
      <div class="ui attached segment"><h2 class="ui header">{props.sub}</h2></div></header>
   )
}

export default Subject;

