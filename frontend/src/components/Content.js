import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';


class Content extends Component {

  state = {
    isEditing: false
  }

  editNote = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }


  renderContent = () => {
    return this.state.isEditing ?
      <NoteEditor

        note={this.props.title === "Click To Add Note Title" ?
          {
            "title": "",
            "body": ""
          } :
          this.props
        }

        handleChange={this.props.handleChange}
        handleSubmit={(event) => {
          this.editNote();
          this.props.handleSubmit(event);
        }}
        handleClick={() => {
          this.editNote()
        }}
      /> :
      <NoteViewer
        note={this.props}
        handleClick={this.editNote}
      />
  }

  render() {

    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
