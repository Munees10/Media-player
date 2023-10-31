import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Home() {

  const [uploadVideoServerResponse, setUploadVideoServerResponse] = useState({})

  return (
    <>
      <div className="container d-flex justify-content-between align-items-center w-100 mt-5 mb-5">
        <div className="add-videos">
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
        </div>
        <Link className='fs-5 bg-info p-2' style={{ textDecoration: "none", color: 'white', border: 'solid 1px black', borderRadius: '5px' }} to={'/watch-history'}>Watch History</Link>
      </div>

      <div className="container-fluid d-flex justify-content-between align-items-center w-100 mt-5 mb-5">
        <div className="all-videos col-lg-9">
          <h2>All Videos</h2>
          <View uploadVideoServerResponse={uploadVideoServerResponse} />
        </div>
        <div className="category col-lg-3">

          <Category />
        </div>
      </div>
    </>
  )
}

export default Home