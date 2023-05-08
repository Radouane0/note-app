import React from 'react';
import { MdDelete } from 'react-icons/md'



const Note = () => {
    return (
        <div className='note'>
            <span>C'est ma note test</span>
            <div className='note-footer'>
                <small>08/05/2023</small>
                <MdDelete className='delete-icons' size='1.3em'/> 

            </div>
        </div>
    );
};

export default Note;