import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';
import uuid from 'react-uuid';
import './App.css';

import Sidebar from './components/sideBar/sidebar.component';
import Header from './components/header/header.component';
import EditPanel from './components/editPanel/editpanel.component.jsx';
import Gallery from './components/gallery/gallery.component';

import firebase from './firebase';
import 'firebase/firestore';
import 'firebase/database';

function App() {

  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onAddNote = () => {
    const newNote = {  
      id: uuid(),
      title: "",
      body: "",
      lastModified: Date.now()
    };

    setNotes([newNote, ...notes]);
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
  useEffect (  () => {
    const noteRef = firebase.database().ref("notes");
    noteRef.on('value', (snapshot) => {
      console.log(snapshot.val());
    })
  }, []);

  */

const searchHandler = (searchTerm) => {
  setSearchTerm(searchTerm);
  if (searchTerm !== "") {
    const newListOfNotes = notes.filter( (note) => {
      return Object.values(note)
      .join("")
      .toLocaleLowerCase()
      .includes(searchTerm.toLowerCase());
    });
    setSearchResults(newListOfNotes);
  } else {
    setSearchResults(notes);
  }
}

console.log(searchHandler);

  return (
    <Router>
        <div className="App">
          <Header
            onAddNote={onAddNote}
            activeNote={activeNote}
            onDeleteNote={onDeleteNote}
            term={searchTerm}
            searchKeyword={searchHandler}
            notes={searchTerm.length < 1 ? notes : searchResults}
          />

        <Switch>
          <Route exact path="/">
                <Redirect to="/list-view"/>
          </Route>
          <Route exact path='/list-view'>
            <div className="list-view">
            <Sidebar 
              notes={notes}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
              searchHandler={searchHandler}
            />
            <EditPanel 
              activeNote={getActiveNote()} 
              onUpdateNote={onUpdateNote}
              onAddNote={onAddNote}
            />
            </div>
          </Route>
          <Route path='/gallery-view'>
            <Gallery 
            notes={notes}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
            />
          </Route>
          <Route path='/gallery-view/:id'>
            <EditPanel 
              activeNote={getActiveNote()} 
              onUpdateNote={onUpdateNote}
              onAddNote={onAddNote}
            />
          </Route>
        </Switch>
      </div>
    </Router>
    
  )
 
}


export default App;
