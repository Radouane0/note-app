import React from 'react';
import { MdDelete } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'
import { AiFillTag } from 'react-icons/ai'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Note = ({ id, text, date, handleDeleteNote, isFavorite, handleSetFavorite, setTagId, tags}) => {

    const [showConfirmation, setShowConfirmation] = useState(false);

    return (
        <div className='note'>
            <div className='note-body'>
            {
                tags && tags.length > 0 ? 
                <div className="note-tags">
                    {
                        tags.map((tag, index) => 
                            <div key={index}
                                style={{
                                    backgroundColor: tag.color
                                }}
                                className='note-tag'>
                                    {tag.text}
                            </div>
                        )
                    }
                </div>
                : <></>
            }
            <span>{text}</span>
            </div>
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
                    onClick={() => setShowConfirmation(true)}
                /> 
                <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation de suppression</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Voulez-vous vraiment supprimer cette note ?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
                        Non
                        </Button>
                        <Button variant="success" onClick={() => handleDeleteNote(id)}>
                        Oui
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Note;