import React from 'react';
import { MdDelete } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'
import { AiFillTag } from 'react-icons/ai'


const Note = ({ id, text, date, handleDeleteNote, isFavorite, handleSetFavorite, setTagId, tags}) => {

    return (
        <div className='note'>
            <div className="note-tags">
                {tags.map((tag, index) => 
                <div key={index}
                style={{
                    backgroundColor: tag.color
                }}
                className='note-tag'>
                    {tag.text}
                </div> )}
            </div>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <AiFillTag className='tag-icon'
                onClick={() => setTagId(id)}
                />
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