import Note from './Note'
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleSetFavorite, textFilter }) => {
    return (
        <div className='notes-list'>
            {notes.filter((note) => {
                return note.text.includes(textFilter)
            }).map((note) => (
            <Note 
                key={note.id}
                id={note.id} 
                text={note.text} 
                date={note.date}
                isFavorite={note.isFavorite}
                handleDeleteNote={handleDeleteNote}
                handleSetFavorite={handleSetFavorite}
            />
        ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
};

export default NotesList;