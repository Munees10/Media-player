import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getALLVideos } from '../Services/allApi'

function View({ uploadVideoServerResponse }) {

  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  const getAllUploadedVideos = async () => {
    //make api call getAllVideos
    const { data } = await getALLVideos()
    setAllVideos(data)
  }

  useEffect(() => {
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  }, [uploadVideoServerResponse,deleteVideoStatus])
  console.log(allVideos);

  return (
    <>
      <Row>
        {
          allVideos?.length>0 ?
            allVideos?.map(video => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}  />
              </Col>
            ))
            :
            <p className='fw-bolder fs-5 text-danger'>Nothing To display!!!</p>
        }
      </Row>

    </>
  )
}

export default View