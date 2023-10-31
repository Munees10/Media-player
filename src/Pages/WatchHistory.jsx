import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../Services/allApi'


function WatchHistory() {
  const [history, setHistory] = useState([])
  const handleHistory = async () => {
    const { data } = await getAllHistory()
    setHistory(data);

  }
  useEffect(() => {
    handleHistory()
  }, [])

  const handleDeleteHistory = async (id)=>{
    //make api call
    await deleteHistory(id)
    //get remaining history
    handleHistory()
  }

  return (

    <div>

      <div className=' d-flex justify-content-between m-5'>
        <h3>Watch History</h3>

        <Link to={'/home'} className='bg-info p-2' style={{ textDecoration: 'none', fontSize: '20px', color: 'white', border: '.5px solid black', borderRadius: '5px' }}><i className="fa-solid fa-arrow-left fa-bounce me-2"></i>Back To Home</Link>
      </div>
      <div>
        <table className='table mt-5 mb-5 container'>
          <thead >
            <tr>
              <th style={{ color: 'white' }}>#</th>
              <th style={{ color: 'white' }}>Caption</th>
              <th style={{ color: 'white' }}>URL</th>
              <th style={{ color: 'white' }}>Time Stamp</th>
              <th style={{ color: 'white' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              history.length>0? history?.map((item, index) => (
                <tr key={index}>
                  <td style={{ color: 'white' }}>{index + 1}</td>
                  <td style={{ color: 'white' }}>{item?.caption}</td>
                  <td style={{ color: 'white' }}><a href={item?.embedLink}>{item?.embedLink}</a></td>
                  <td style={{ color: 'white' }}>{item?.timeStamp}</td>
                  <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
                </tr>
              )) : <p className='fw-bolder fs-5 text-danger'>Nothing to Display</p>
            }
          </tbody>
        </table>
      </div>


    </div>

  )
}

export default WatchHistory