import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';

import Sidebar from './components/sideBar/sidebar.component';
import Header from './components/header/header.component';
import EditPanel from './components/editPanel/editpanel.component.jsx';

function App() {

  /// temporar store of notes
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const [listView, galleryView] = useState(true);

  const onAddNote = () => {
    const newNote = {  
      id: uuid(),
      title: "",
      body: "",
      lastModified: Date.now()
    };

    setNotes([newNote, ...notes]);
    console.log('add new note');
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter( (note) => note.id !== idToDelete ));
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotesArray);
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }

/*
  const makeListView = () = {

  }

  const makeGalleryView = () = {
    
  }

  */
  return (
    <div className="App">
    <Header
    onAddNote={onAddNote}
    activeNote={activeNote}
    onDeleteNote={onDeleteNote}
    />

  


    <div className="list-view">
        <Sidebar 
          notes={notes}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <EditPanel 
          activeNote={getActiveNote()} 
          onUpdateNote={onUpdateNote}
          onAddNote={onAddNote}
        />
    </div>
     
     
    </div>
  );
}

export default App;
