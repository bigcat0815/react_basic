import React from 'react';

function CreateContent(props) {
    return (
        <div>

        <article>
      <h2>
        Create
      </h2>

<form action="/create_process" method="post"
  onSubmit={function(e){
    e.preventDefault();
    props.onSubmit(
      e.target.title.value,
      e.target.desc.value);
  }}
>

  <p><input type ="text" name ="title" placeholder="title" ></input></p>
  <p>
    <textarea name ="desc" placeholder="description"></textarea>
  </p>
  <p>
    <input type="submit"></input>
  </p>
</form>
        </article>
        </div>
      
    );
  }
  export default CreateContent;