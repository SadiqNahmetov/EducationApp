import React, { useEffect, useState } from 'react'
import axios from "axios";


function Header() {
    const baseUrl = "https://localhost:7184";

    const [header, setHeader] = useState([])
  
  
    async function getAllHeader() {
  
      await axios.get(`${baseUrl}/api/Header/GetAll`)
        .then((res) => {
          return setHeader(res.data)
        })
  
    }
  
    useEffect(() => {
      getAllHeader()
    }, [])
  
    return (
        <>
            {

                header.map((header, headerIndex) => {

                    return (


                        <div className="home">
                        <div className="home_background_container prlx_parent">
                              
                        <img src={`data:image/jpeg;base64, ${header.image}`}  alt="header" />
                        </div>
                        <div className="home_content"
                           key={headerIndex}
                            dangerouslySetInnerHTML={{__html: header.title}}>
                            {/* <h1>Courses</h1> */}
                        </div>
                    </div>
                    )
            }
        )}
            </>
    )
}

export default Header;