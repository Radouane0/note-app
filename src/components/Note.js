import React from 'react';
import { MdDelete } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'


const Note = ({ id, text, date, handleDeleteNote}) => {

    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <AiFillStar 
                    className='star-icon'
                    size='1.3em'
                    />
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