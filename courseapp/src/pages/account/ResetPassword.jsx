import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Navbar from '../../components/layout/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/layout/Footer';
import Swal from 'sweetalert2';
import axios from 'axios';

function ResetPassword() {

  const navigate = useNavigate();

  const location = useLocation();

  const url = 'https://localhost:7184';

  const [Password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const token = new URLSearchParams(location.search).get("token");
  const email = new URLSearchParams(location.search).get("email");


  const newResetPasswordData = {
    NewPassword: Password,
    Email: email,
    Token: token
  };

  async function Reset(e) {
    e.preventDefault();

    if (Password === repeatPassword) {
      const formData = new FormData();
      for (const [key, value] of Object.entries(newResetPasswordData)) {
        formData.append(key, value);
      };

      await axios.post(`${url}/api/Account/ResetPassword`, formData, {
        headers: {
          Accept: "*/*"
        }
      })
        .then(function (response) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Password reset successfully",
            showConfirmButton: false,
            timer: 4000,
          });
          navigate(`/login`);
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
          });
        });
    }else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Password does not match',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  return (
    <>
      <Navbar />
      <Header sectionHeader="ResetPassword" />
      <div className='container my-5 fr'
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          Reset Password
        </Typography>
        <Box component="form" noValidate onSubmit={(e) => Reset(e)} style={{ width: '25rem' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="off"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="RepeatPassword"
            name="password"
            autoComplete="off"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <Button
            style={{ background: '#ffb606' }}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Reset
          </Button>
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default ResetPassword;