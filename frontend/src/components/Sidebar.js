import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  render() {

    return (

      <div className='master-detail-element sidebar'>

        <button className="add">
          {
            this.props.addDisabled ?
              <img className="plus_icon_grey" alt="plus icon" onClick={this.props.handleAddNote} /> :
              <img className="plus_icon" onClick={this.props.handleAddNote} />
          }
        </button>

        <NoteList
          noteList={this.props.noteList}
          handleClick={this.props.handleSideNoteClick}
        />

      </div>

    );
  }
}

export default Sidebar;
