import React, { useState, useEffect } from 'react'
import { Modal, Form, Button,Row,Col,FormLabel } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../Services/allApi';
import VideoCard from './VideoCard';



function Category() {
  const [allCategories, setAllCategories] = useState([])
  const [categoryName, setCategoryName] = useState("")
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleAddCategory = async () => {
    if (categoryName) {
      const body = {
        categoryName,allVideos:[]
      }
      const response = await addCategory(body)
      if (response.status >= 200 && response.status < 300) {
        //hide modal
        handleClose()
        //reset state
        setCategoryName("")
        //get category
        getCategories()
      } else {
        toast.error("Operation error please check again!!!")
      }
    } else {
      toast.warning("Please provide a category name")
    }
  }

  const getCategories = async () => {
    //make api call
    const { data } = await getAllCategory()
    setAllCategories(data)
    console.log(data);
  }
  useEffect(() => {
    getCategories()
  }, [])

  const handleDelete = async (id)=>{
    await deleteCategory(id)
    getCategories()
  }

  const dragOver = (e)=>{
    console.log("Video drag over category");
    e.preventDefault()
  }

  const videoDrop = async (e,categoryId)=>{
    // console.log("video dropped inside category Id: "+categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    // console.log("Video Card Id: ",videoId);
    //get video details
    const {data} = await getAVideo(videoId)
    // console.log(data);
    //get category details
    const selectedCategory = allCategories?.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    //make api call to update category
    await updateCategory (categoryId,selectedCategory)
    getCategories()
  }

  return (
    <>
      <div className='d-grid ms-3 me-3'><button onClick={handleShow} className='btn btn-info'>Add New Category</button></div>

      {
        allCategories?.length>0? allCategories?.map(item => (
          <div className='m-3 border rounde p-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)} >
            <div className='d-flex justify-content-between align-items-center'>
              <h6>{item.categoryName}</h6>
              <button onClick={()=>handleDelete(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            <Row>
              {
                item?.allVideos &&
                item?.allVideos.map(card=>(
                  <Col sm={12}>
                    <VideoCard displayData={card} insideCategory={true} />
                  </Col>
                ))
              }
            </Row>

          </div>
        )) : <p className='fw-bolder fs-5 text-danger'>No categories added!!!</p>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="border border-secondary rounded p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FormLabel>Enter category name</FormLabel>
              <Form.Control type="text" placeholder="Enter category name" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position='top-center'
        theme='colored'
        autoClose={2000}
      />
    </>
  )
}

export default Category;