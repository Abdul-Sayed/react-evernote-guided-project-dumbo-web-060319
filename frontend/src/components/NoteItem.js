import React from 'react';

const NoteItem = (props) => {

  return (
    <React.Fragment>
      <li onClick={() => props.handleClick(props)}>
        <h2>{props.title}</h2>
        <p>{`${props.body.substring(0, 20)}..`}</p>
      </li>
    </React.Fragment>
  );
}

export default NoteItem;
