import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  let copiedNoteList = props.noteList.slice()


  copiedNoteList.sort((note1, note2) => {
    if (note1.updated_at > note2.updated_at) return 1;
    if (note1.updated_at < note2.updated_at) return -1;
    return 0;
  })

  const renderNotes = copiedNoteList.reverse().map(note => {
    return <
      NoteItem
      key={note.id}
      {...note}
      handleClick={props.handleClick}
    />
  })

  return (
    <React.Fragment>
      <ul>
        {renderNotes}
      </ul>
    </React.Fragment>
  );
}

export default NoteList;

