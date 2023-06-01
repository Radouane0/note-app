import Note from './Note'
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleSetFavorite, textFilter, setTagId }) => {
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
                tags={note.tags}
                isFavorite={note.isFavorite}
                handleDeleteNote={handleDeleteNote}
                handleSetFavorite={handleSetFavorite}
                setTagId={setTagId}
            />
        ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
};

export default NotesList;