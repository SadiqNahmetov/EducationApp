import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import axios from 'axios';


function HeaderCreate() {

    const navigate = useNavigate();

    const url = 'https://localhost:7184';

    const [header, setHeader] = useState([]);
    const [image, setImage] = useState();
    const [title, setTitle] = useState();

    const getAllHeader = async () => {
        await axios.get(`${url}/api/Header/GetAll`)
            .then((res) => {
                setHeader(res.data);
            });
    };

    useEffect(() => {
        getAllHeader();
    }, []);

    const newHeader = {
        image,
        title
    };

    const CreateHeader = async (e) => {
        e.preventDefault();
        await axios.post(`${url}/api/Header/Create`, newHeader)
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Slider Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Header not Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            });

        navigate('/HeaderTable');
    };

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => resolve(reader.result.replace(/^data:.+;base64,/, ''));
            reader.onerror = (error) => reject(error);
        });
    };

    const base64Img = (file) => {
        getBase64(file).then((result) => {
            setImage(result);
        });
    };


    return (
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Create Header</h2>
            <Form onSubmit={(e) => CreateHeader(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p>Image</p>
                    <img
                        style={{
                            width: "200px",
                            height: "100px",
                            marginBottom: "10px",
                            borderRadius: "unset",
                        }}
                        src={`data:image/jpeg;base64,${image}`}
                        alt="header image"
                    />
                    <Form.Control
                        type="file"
                        onChange={(e) => base64Img(e.target.files[0])}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Title"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Enter Title'}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Button variant="outline-primary" type="submit">
                    Create
                </Button>
                <Link to="/SliderTable">
                    <Button variant="outline-dark" type="submit" className='mx-2'>
                        Cancel
                    </Button>
                </Link>
            </Form>
        </div>
    )
}

export default HeaderCreate;