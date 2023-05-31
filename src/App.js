import NotesList from "./components/NotesList";
import SearchBar from "./components/SearchBar";
import { nanoid } from "nanoid"
import { useEffect, useState } from 'react';
import { RiMoonClearFill } from 'react-icons/ri'
import { FaLightbulb } from 'react-icons/fa'
import { BiNotepad } from 'react-icons/bi'

const App = () =>  {

  const [notes, setNotes] = useState([
        {
          id: nanoid(),
          text: "Ceci est ma première note!",
          date: "09/05/2023",
          isFavorite: true
        },
        {
          id: nanoid(),
          text: "Ceci est ma deuxième note!",
          date: "12/05/2023",
          isFavorite: false
        },
        {
          id: nanoid(),
          text: "Ceci est ma troisième note!",
          date: "17/05/2023",
          isFavorite: false
        },
        {
          id: nanoid(),
          text: "Ceci est ma quatrième note!",
          date: "24/05/2023",
          isFavorite: false
        },
        {
          id: nanoid(),
          text: "Ceci est ma cinquième note!",
          date: "30/05/2023",
          isFavorite: false
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

  const setFavorite = (id) => {
    const newNotes = [...notes].map((note) => {
      if (note.id !== id) {
        return note;
      }
      return {
        ...note, 
        isFavorite: !note.isFavorite
      }
    })   
    
    setNotes(newNotes)
  }

  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const [textFilter, setTextFilter] = useState("")
 
  return (
    <div className={`container ${isDarkMode ? 'dark' : ''}`}>
      <div>
        <div className="title">Notes <BiNotepad className="title-icon"/></div>
        <SearchBar 
        textFilter={textFilter}
        setTextFilter={setTextFilter}
        />
        <NotesList 
        notes={notes} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
        handleSetFavorite={setFavorite}
        textFilter={textFilter}
        />
        <button onClick={toggleDarkMode} className="dark-mode-button">
          {isDarkMode ? <FaLightbulb className="icon" /> : <RiMoonClearFill className="icon" />}
        </button>
      </div>
    </div>
  );
}

export default App;
