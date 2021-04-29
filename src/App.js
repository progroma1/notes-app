import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';

import Sidebar from './components/sideBar/sidebar.component';
import Mainbar from './components/mainBar/mainbar.component';


function App() {

  /// temporar store of notes
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled note",
      body: "",
      lastModified: Date.now()
    };

    setNotes([newNote, ...notes]);
    console.log('add new note');
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter( (note) => note.id !== idToDelete ));
  }


  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }


  return (
    <div className="App">
     <Sidebar 
     notes={notes} 
     onAddNote={onAddNote} 
     onDeleteNote={onDeleteNote}
     activeNote={activeNote}
     setActiveNote={setActiveNote}
     />
     <Mainbar activeNote={getActiveNote()} />
    </div>
  );
}

export default App;
