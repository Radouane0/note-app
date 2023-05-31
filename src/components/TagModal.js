import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillTrashFill } from 'react-icons/bs'

function TagModal({ tagId, setTagId, tags, setTags }) {

  const handleClose = () => setTagId(-1);

  const [localTags, setLocalTags] = useState(tags)

  useEffect(() => {
    setLocalTags(tags)
  }, [tags])

  const handleDeleteTags = (tag) => {
    const newTags = localTags.filter((t) => t !== tag)
    setLocalTags(newTags)
  }

  const handleSave = () => {
    setTags(tagId, localTags)
    handleClose()
  }


  return (
      <Modal show={tagId !== -1} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gestion des Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
             localTags.map(
              (tag, index) => {
                return (
                  <div key={index} className='tags-choice'>
                    <p className='tag'>{tag}</p>
                    <BsFillTrashFill className='trash-icon'
                    onClick={() => handleDeleteTags(tag)}
                    />
                  </div>

                )
              }
            )
          }

        <div className='add-tags'>
          <input placeholder='Saisissez un tag...' className='input-tags'/>
          <button className='add-button'>Ajouter</button>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default TagModal;