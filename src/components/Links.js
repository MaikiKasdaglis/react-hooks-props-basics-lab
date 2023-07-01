import React from 'react';

function Links (props) {
    console.log(`props from About`, props)
    return (
      <div>
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
      </div>
    );
  };
  
  export default Links;


//   <Links github={props.links.github} linkedin={props.links.linkedin}/>


//   <About bio={user.bio} links={user.links}/>