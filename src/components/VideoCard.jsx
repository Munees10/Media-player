import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import { addToHistory, deleteAVideo } from '../Services/allApi'


function VideoCard({ displayData, setDeleteVideoStatus, insideCategory }) {
  const [show, setShow] = useState(false)
  console.log(displayData);

  const handleClose = () => setShow(false)

  const handleShow = async () => {
    setShow(true)
    const { embedLink, caption } = displayData
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US', { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(today)

    let videoDetails = {
      caption, embedLink, timeStamp
    }
    await addToHistory(videoDetails)

  }
  const removeVideo = async (id) => {

    //make api call
    const response = await deleteAVideo(id)
    setDeleteVideoStatus(true)
  }

  const dragStarted = (e, id) => {
    console.log("Drag Started.. video id:" + id);
    e.dataTransfer.setData("videoId", id)
  }



  return (

    <>

      <Card className='mt-2' draggable onDragStart={(e) => dragStarted(e, displayData?.id)} >
        <Card.Img onClick={handleShow} variant="top" style={{ width: '100%', height: '180px' }} src={displayData?.url} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h6>{displayData?.caption}</h6>
            {insideCategory ? "" : <Button onClick={() => removeVideo(displayData?.id)} className="btn"><i className='fa-solid fa-trash text-danger'></i></Button>}
          </Card.Title>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width={"100%"} height="360" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Modal.Body>

      </Modal>


    </>
  )
}

export default VideoCard