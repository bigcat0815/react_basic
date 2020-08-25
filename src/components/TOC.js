import React from 'react';

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
  export default TOC;