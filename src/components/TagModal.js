import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillTrashFill } from 'react-icons/bs'


function TagModal({ tagId, setTagId, tags, setTags }) {

  const [localTags, setLocalTags] = useState(tags)

  const [inputTag, setInputTag] = useState("")

  const [inputTagColor, setInputTagColor] = useState("#ff0000")

  useEffect(() => {
    setLocalTags(tags)
  }, [tags])

  const handleClose = () => setTagId(-1);

  const handleDeleteTags = (index) => {
    const newLocalTags = [...localTags];
    newLocalTags.splice(index, 1);
    setLocalTags(newLocalTags)
  }

  const handleSave = () => {
    setTags(tagId, localTags)
    handleClose()
  }

  const handleTagChange = (e) => {
    setInputTag(e.target.value)
  }

  const handleAddTag = () => {
    const newLocalTags = [...localTags]
    newLocalTags.push({
      text: inputTag,
      color: inputTagColor
    })
    setLocalTags(newLocalTags)
  }

  const handleSetTagColor = (e, index) => {
    const newLocalTags = [...localTags]
    newLocalTags[index] = {
      ...localTags[index],
      color: e.target.value
    }
    setLocalTags(newLocalTags)
  }

  const handleSetInputTagColor = (e) => {
    setInputTagColor(e.target.value)
  }

  const handleSetTagText = (e, index) => {
    const newLocalTags = [...localTags]
    newLocalTags[index] = {
      ...localTags[index],
      text: e.target.value
    }
    setLocalTags(newLocalTags)
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
                    <input
                      type="color"
                      className="color"
                      value={tag.color}
                      onChange={(e) => handleSetTagColor(e, index)}
                    />
                    <input 
                      placeholder='Saisissez un tag...' 
                      className='input-tags'
                      value={tag.text}
                      onChange={(e) => handleSetTagText(e, index)}
                    />
                    <BsFillTrashFill className='trash-icon'
                    onClick={() => handleDeleteTags(index)}
                    />
                  </div>

                )
              }
            )
          }
        <div className='add-tags'>
          <h5>Ajouter un tag</h5>
        <div className='form-control'>
          <label>Choix du texte</label>
            <input 
              placeholder='Saisissez un tag...' 
              className='input-tags'
              value={inputTag}
              onChange={handleTagChange}
            />
          </div>
          <div className='form-control'>
            <label>Choix de la couleur</label>
              <input
                type="color"
                className="color-add"
                value={inputTagColor}
                onChange={handleSetInputTagColor}
              />
          </div>
          <Button variant="primary" 
          className='add-button'
          onClick={handleAddTag}>
            Ajouter
          </Button>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="success" onClick={handleSave}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default TagModal;