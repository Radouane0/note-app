import React from 'react';
import { MdDelete } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'


const Note = ({ id, text, date, handleDeleteNote, isFavorite, handleSetFavorite}) => {

    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <AiFillStar 
                    style={{ color: isFavorite ? 'yellow' : 'black' }}
                    className='star-icon'
                    onClick={() => handleSetFavorite(id)}
                    />
                <MdDelete 
                    className='delete-icon' 
                    onClick={() => handleDeleteNote(id)}
                /> 
            </div>
        </div>
    );
};

export default Note;