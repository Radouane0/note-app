import NotesList from "./components/NotesList";
import { nanoid } from "nanoid"
import { useEffect, useState } from 'react';

const App = () =>  {

  const [notes, setNotes] = useState([
        {
          id: nanoid(),
          text: "Ceci est ma première note!",
          date: "09/05/2023"
        },
        {
          id: nanoid(),
          text: "Ceci est ma deuxième note!",
          date: "12/05/2023"
        },
        {
          id: nanoid(),
          text: "Ceci est ma troisième note!",
          date: "17/05/2023"
        },
        {
          id: nanoid(),
          text: "Ceci est ma quatrième note!",
          date: "24/05/2023"
        },
        {
          id: nanoid(),
          text: "Ceci est ma cinquième note!",
          date: "30/05/2023"
        }
  ])


  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }
    
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }


  return (
    <div className="container">
      <div className="title">Notes</div>
      <NotesList 
      notes={notes} 
      handleAddNote={addNote} 
      handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
