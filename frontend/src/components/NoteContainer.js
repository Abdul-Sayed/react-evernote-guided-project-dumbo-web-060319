import React, { Component, Fragment } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Search from './Search';

class NoteContainer extends Component {

  state = {
    noteArray: [],
    originalNoteArray: [],
    clickedNote: {},
    title: "",
    body: "",
    addDisabled: false,
    search: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/notes')
      .then(res => res.json())
      .then(fetchedNoteList => this.setState({
        noteArray: fetchedNoteList,
        originalNoteArray: fetchedNoteList
      }))
  }

  handleSideNoteClick = (note) => {
    this.setState({
      clickedNote: note,
      title: note.title,
      body: note.body
    })
  }

  handleAddNote = () => {

    fetch(`http://localhost:3000/api/v1/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "title": "Click To Edit Note",
        "body": ""
      })
    })
      .then(response => response.json())
      .then(newNote => {

        if (this.state.noteArray.slice(0, 1)[0].title === "Click To Edit Note") {
          console.log('Adding note disabled. Edit Existing New Note')
          this.setState({ addDisabled: true })
          return
        } else {
          console.log('creating new note')
          this.setState({
            noteArray: [newNote, ...this.state.noteArray],
            addDisabled: false
          })
        }

      })
      .catch(error => {
        console.log(error.message);
      });

  }

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/api/v1/notes/${this.state.clickedNote.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "title": this.state.title,
        "body": this.state.body
      })
    })
      .then(response => response.json())
      .then(updatedNote => {

        const updatedNoteArray = this.state.noteArray.map(note => {
          if (note.id === updatedNote.id) {
            return note = updatedNote
          }
          return note
        })

        this.setState({
          noteArray: updatedNoteArray,
          addDisabled: false
        })
      })
      .catch(error => {
        console.log(error.message);
      });

  }


  handleSearch = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    const searchedNotes = this.state.originalNoteArray.filter(note => note.body.includes(value))
    this.setState({ noteArray: searchedNotes })
  }


  render() {

    return (
      <Fragment>

        <Search
          search={this.state.search}
          handleChange={this.handleSearch}
        />

        <div className='container'>

          <Sidebar
            noteList={this.state.noteArray}
            handleSideNoteClick={this.handleSideNoteClick}
            handleAddNote={this.handleAddNote}
            addDisabled={this.state.addDisabled}
          />

          <Content
            title={this.state.title}
            body={this.state.body}
            handleChange={this.handleFormChange}
            handleSubmit={this.handleFormSubmit}
          />

        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
