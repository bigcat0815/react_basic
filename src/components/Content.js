import React from 'react';

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
  export default Content;