import React, { Component } from 'react';

class NoteEditor extends Component {
  render() {

    return (
      <form className="note-editor">

        <input
          type="text"
          placeholder="Title"
          name="title"
          value={this.props.note.title}
          onChange={this.props.handleChange}
        />

        <textarea
          placeholder="body"
          name="body"
          value={this.props.note.body}
          onChange={this.props.handleChange}
        />

        <div className="button-row">
          <input
            className="button"
            type="submit"
            value="Save"
            onClick={this.props.handleSubmit}
          />
          <button
            type="button"
            onClick={this.props.handleClick}>
            Cancel
          </button>
        </div>

      </form>
    );
  }
}

export default NoteEditor;
