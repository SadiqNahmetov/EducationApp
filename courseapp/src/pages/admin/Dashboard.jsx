import React from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';



function Dashboard() {
  return (
    <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 grid-margin stretch-card my-5 '>
                        <h2 style={{color:"red"}} className="">Dashboard</h2>
                        <Table striped bordered  className='table-dark'>
                            <thead>
                                <tr  style={{ textAlign: "center" }}>
                                    <th scope="col">#</th>
                                    <th scope="col">Components</th>
                                    <th scope="col">Settings </th>
                                </tr>
                            </thead>
                            <tbody style={{ textAlign: "center" }}>
                                <tr className='table-success'>
                                    <th scope="row">1</th>
                                    <td>
                                        <h3>Slider</h3>
                                    </td>
                                    <td>
                                        <Link to="/SliderTable">
                                            <Button variant="outline-primary">Manage</Button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr className='table-success'>
                                    <th scope="row">2</th>
                                    <td>
                                        <h3>Header</h3>
                                    </td>
                                    <td>
                                        <Link to="/HeaderTable">
                                            <Button variant="outline-primary">Manage</Button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr className='table-success'>
                                    <th scope="row">3</th>
                                    <td>
                                        <h3>Title</h3>
                                    </td>
                                    <td>
                                        <Link to="/TitleTable">
                                            <Button variant="outline-primary">Manage</Button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr className='table-success'>
                                    <th scope="row">4</th>
                                    <td>
                                        <h3>About</h3>
                                    </td>
                                    <td>
                                        <Link to="/AboutTable">
                                            <Button variant="outline-primary">Manage</Button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr className='table-success'>
                                    <th scope="row">5</th>
                                    <td>
                                        <h3>Banner</h3>
                                    </td>
                                    <td>
                                        <Link to="/BannerTable">
                                            <Button variant="outline-primary">Manage</Button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr className='table-success'>
                                    <th scope="row">6</th>
                                    <td>
                                        <h3>Service</h3>
                                    </td>
                                    <td>
                                        <Link to="/ServiceTable">
                                            <Button variant="outline-primary">Manage</Button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr className='table-success'>
                                    <th scope="row">7</th>
                                    <td>
                                        <h3>Contact</h3>
                                    </td>
                                    <td>
                                        <Link to="/ContactTable">
                                            <Button variant="outline-primary">Manage</Button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Dashboard