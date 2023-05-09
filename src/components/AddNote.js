import { useState } from "react"; 

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('')

    const handleChange = (event) => {
        setNoteText(event.target.value)
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
        }
        setNoteText('')
    }

    return (
        <div className="note new">
            <textarea 
                rows={8} 
                cols={10} 
                placeholder="Ecrivez pour créer une note..."
                value={noteText}
                onChange={handleChange}
                ></textarea>
                <div className="note-footer">
                    <small>150 caractère restant</small>
                    <button className="save" onClick={handleSaveClick}>Enregistrer</button>
                </div>
        </div>
    );
};

export default AddNote;