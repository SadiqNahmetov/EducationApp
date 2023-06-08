import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from 'moment';
import axios from "axios";


function AboutTable() {

  let count = 1;

  const url = 'https://localhost:7184';

  const [about, setAbout] = useState([]);


  const getAllAbout = async () => {
    await axios.get(`${url}/api/About/GetAll`)
      .then((res) => {
        setAbout(res.data);
      });
  }

  useEffect(() => {
    getAllAbout();
  }, []);


  const DeleteAbout = async (id) => {
     console.log(id);
    await axios
      .delete(`${url}/api/About/Delete?id=${id}`)
      .then((res) => {
        Swal.fire("", "Deleted About", "success");
        console.log(res);
        getAllAbout();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log(err);
      });

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card my-5">
          <h2 className="mx-auto">About Table</h2>
          <div className='d-flex justify-content-between'>
            <Link to="/AboutCreate">
              <button className="btn btn-success my-2" style={{ float: "right" }}>Create</button>
            </Link>
            <Link to="/dashboard">
              <button className="btn btn-success my-2" style={{ float: "right" }}>Dashboard</button>
            </Link>
          </div>
          <Table striped bordered hover variant="dark" >
            <thead>
              <tr className="table-info" style={{ textAlign: "center" }}>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Create date</th>
                <th>Update date</th>
                <th>Setting</th>
              </tr>
            </thead>
            <tbody>
              {
                about.map((about, index) => (
                  <tr key={index} style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <td className="table-dark">{count++}</td>
                    <td className="table-dark">
                      <img style={{
                        width: "100px",
                        height: "70px",
                        borderRadius: "unset",
                      }}
                        src={`data:image/jpeg;base64,${about.image}`} alt="sliderImage" />
                    </td>
                    <td className="py-1 table-dark" dangerouslySetInnerHTML={{ __html: about.title }}></td>
                    <td style={{width:510}} className="py-1 table-dark" dangerouslySetInnerHTML={{ __html: about.description }}></td>
                    <td className="table-dark">{moment(about.createDate).format('DD-MM-YYYY HH:mm:ss')}</td>
                    <td className="table-dark">{moment(about.updateDate).format('DD-MM-YYYY HH:mm:ss')}</td>
                    <td className="table-dark">
                      <Link to={`/aboutUpdate/${about.id}`}>
                        <button className="btn btn-warning" style={{ marginRight: "15px" }}>Update</button>
                      </Link>
                      <button
                        onClick={() => DeleteAbout(about.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
                      </button>

                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>

  );
}

export default AboutTable;