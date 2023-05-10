import React from 'react';
import { MdDelete } from 'react-icons/md'


const Note = ({ id, text, date, handleDeleteNote}) => {
    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDelete 
                className='delete-icon' 
                size='1.3em' 
                onClick={() => handleDeleteNote(id)}
                /> 
            </div>
        </div>
    );
};

export default Note;