import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from 'moment';
import axios from "axios";


function CourseTable() {

  let count = 1;

  const url = 'https://localhost:7184';

  const [course, setCourse] = useState([]);


  const getAllCourse = async () => {
    await axios.get(`${url}/api/Course/GetAll`)
      .then((res) => {
        console.log(res.data);
        setCourse(res.data);
      });
  }

  useEffect(() => {
    getAllCourse();
  }, []);


  const DeleteCourse = async (id) => {
     console.log(id);
    await axios
      .delete(`${url}/api/Course/Delete?id=${id}`)
      .then((res) => {
        Swal.fire("", "Deleted Course", "success");
        console.log(res);
        getAllCourse();
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
          <h2 className="mx-auto">Course Table</h2>
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
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Create date</th>
                <th>Update date</th>
                <th>Setting</th>
              </tr>
            </thead>
            <tbody>
              {
                course.map((course, index) => (
                  <tr key={index} style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <td className="table-dark">{count++}</td>
                    <td className="table-dark">
                      <img style={{
                        width: "100px",
                        height: "70px",
                        borderRadius: "unset",
                      }}
                        src={`data:image/jpeg;base64,${course.image}`} alt="sliderImage" />
                    </td>
                    <td className="py-1 table-dark" dangerouslySetInnerHTML={{ __html: course.name }}></td>
                    <td style={{width:510}} className="py-1 table-dark" dangerouslySetInnerHTML={{ __html: course.description }}></td>
                    <td className="py-1" dangerouslySetInnerHTML={{ __html: course.price }}></td>
                    <td className="table-dark">{moment(course.createDate).format('DD-MM-YYYY HH:mm:ss')}</td>
                    {/* <td className="table-dark">{moment(course.updateDate).format('DD-MM-YYYY HH:mm:ss')}</td> */}
                    <td className="table-dark">
  {course.createDate !== "0001-01-01T00:00:00"
    ? moment(course.createDate).format('DD-MM-YYYY HH:mm:ss')
    : "Create date"}
</td>
                    <td className="table-dark">
                      <Link to={`/courseUpdate/${course.id}`}>
                        <button className="btn btn-warning" style={{ marginRight: "15px" }}>Update</button>
                      </Link>
                      <button
                        onClick={() => DeleteCourse(course.id)}
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

export default CourseTable;