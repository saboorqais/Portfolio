import React, { useContext, useState } from 'react'
import styles from '../../../styles/Form.module.css'
import { FormControl, Input, FormHelperText, InputLabel, TextField } from '@mui/material';
import styled from 'styled-components';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import LoadingOverlay from 'react-loading-overlay'

import axios from 'axios';
import LoaderContext from '../../Context/LoaderContext';

function FormStructure() {
   const active= useContext(LoaderContext)
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Subject, setSubject] = useState("")
    const [Message, setMessage] = useState("")
    const [Validation, setValidation] = useState([false, false, false, false])
    const createNotification = async (type) => {
        var decesion = [false, false, false, false]
        if (Name.length <= 0) {
            decesion[0] = true
        }
        else {
            decesion[0] = false
        }
        if (Email.length <= 0) {
            decesion[1] = true
        }
        else {
            decesion[1] = false
        }
        if (Subject.length <= 0) {
            decesion[2] = true
        }
        else {
            decesion[2] = false
        }
        if (Message.length <= 0) {
            decesion[3] = true
        }
        else {
            decesion[3] = false
        }
        setValidation(decesion)
        if (decesion.includes(true)) {
            return NotificationManager.error('Empty Fields', 'Kindly Fill The Complete Form', 5000, () => {
                alert('Kindly Fill the Complete Form');
            });
        }
        else {
            const data = [Name, Email, Message, Subject]
            active.setBoolean(true)
             await axios.post("https://stark-dusk-10913.herokuapp.com/", { data: data }).then((value) => {
             
                active.setBoolean(false)
           if(value.status===200)
                return NotificationManager.success('Form Submiited', `Hey ${Name} We will Contact you soon`)
            else
            return NotificationManager.error('Empty Fields', 'Kindly Fill The Complete Form', 5000, () => {
                alert('Kindly Fill the Complete Form');
            });
            }, (err) => {
                active.setBoolean(false)
                return NotificationManager.error('Server Error', 'Kindly try again If it Presists try again after sometime', 5000, () => {
                    alert('Kindly Fill the Complete Form');
                });
            }
            )
           
        }





    };



    return (
 
<div
            className={styles.Wrapper}
        >
            <FormControl
                fullWidth={true}
                margin="normal"
                error={Validation[0]}
            >
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input
                    onClick={() => { Validation.filter(x => x == false).length === 4 ? "" : setValidation([false, false, false, false]) }}
                    onChange={(e) => { setName(e.target.value) }}
                    value={Name}
                    id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">{Validation[0] === true ? "Cant Leave Empty" : ""}</FormHelperText>

            </FormControl>
            <FormControl
                margin="normal"
                fullWidth={true}
                error={Validation[1]}
            >
                <InputLabel htmlFor="my-input">Email Address</InputLabel>
                <Input
                    onChange={(e) => { setEmail(e.target.value) }}
                    onClick={() => { Validation.filter(x => x == false).length === 4 ? "" : setValidation([false, false, false, false]) }}
                    value={Email}
                    id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">{Validation[1] === true ? "Email Invalid or Empty" : "We'll never share your email."}</FormHelperText>
            </FormControl>

            <FormControl
                margin="normal"
                fullWidth={true}
                error={Validation[2]}
            >
                <InputLabel htmlFor="my-input">Subject</InputLabel>
                <Input
                    onClick={() => { Validation.filter(x => x == false).length === 4 ? "" : setValidation([false, false, false, false]) }}
                    onChange={(e) => { setSubject(e.target.value) }}
                    value={Subject}
                    id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">{Validation[2] === true ? "Empty Value!" : ""}</FormHelperText>

            </FormControl>

            <FormControl

                margin="normal"
                fullWidth={true}
                error={Validation[3]}
            >
                <TextField
                    error={Validation[3]}
                    onClick={() => { Validation.filter(x => x == false).length === 4 ? "" : setValidation([false, false, false, false]) }}
                    onChange={(e) => { setMessage(e.target.value) }}
                    value={Message}
                    id="outlined-multiline-static"
                    label="Your Message"
                    multiline
                    rows={4}


                />
                <FormHelperText id="my-helper-text">{Validation[3] === true ? "Empty Value!" : ""}</FormHelperText>
            </FormControl>

            <Button
                onClick={() => {
                    createNotification('success')
                }}
            >
                Submit
            </Button>
            <NotificationContainer />

        </div>
    
        
    )
}

export default FormStructure

const Button = styled.button`
width: 193px;
height: 70px;
color: white;
margin-top: 60px;
/* Black */
background: #0B0C0E;
font-family: 'Neue Montreal';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
transition: all 1s;
@media (max-width:630px) {
width: 163px;
height: 50px;    
}
/* Black */
border: 1px solid #0B0C0E;
border-radius: 170px;

`