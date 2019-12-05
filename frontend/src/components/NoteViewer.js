import React, { Fragment } from 'react';

const NoteViewer = (props) => {

  return (
    <Fragment>

      <h2>{props.note.title}</h2>
      <p>{props.note.body}</p>

      {(props.note.title).length === 0 ?
        <h2>Add new note <br></br> Or click on existing note to edit..</h2> :
        <button onClick={props.handleClick}>Click to Edit</button>}

    </Fragment>
  );
}

export default NoteViewer;
