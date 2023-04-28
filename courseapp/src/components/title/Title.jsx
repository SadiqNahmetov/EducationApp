import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Title(props) {

  const baseUrl="https://localhost:7184"

  const [title , setTitle] = useState([])

  async function getAllTitle(){
    await axios.get(`${baseUrl}/api/Title/GetAll`)
    .then((res) =>{
       return setTitle(res.data)
    })
  }

  useEffect(() =>{
    getAllTitle()

  } , [])

  return (
    <>

     <div className='popular title_section'>
        <div className='container'>
        <div className="row">
        <div className="col">
          <div className="section_title text-center">

            {
              title.filter((n) => n.name === props.sectionTitle).map((item, titleIndex) =>{
               return(
                <h1 key={titleIndex}>{item.name}</h1>
               )
              })
            }
          </div>

        </div>
      </div>
        </div>
     </div>


      

    </>
  )
}

export default Title;