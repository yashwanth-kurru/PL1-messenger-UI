import React,{useEffect, useState} from 'react'
import 
    { Container, Typography, TextField, 
    Button, Radio, RadioGroup, FormControlLabel, 
    FormControl, FormLabel,
     Card, Grid } from '@mui/material/';
import authContext from '../Context/authContext';
import maersk from '../assets/maersk.png'
import { useNavigate } from "react-router-dom";
const Login = (props) => {

    const { loginUser } = React.useContext(authContext);
    const [isError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    
    useEffect(() => {
        let payload = JSON.parse(localStorage.getItem('payLoad'))
        if(payload) {
            navigate('/dashboard')
        }

    }, []);

    const handleSubmit = async() =>{
        let didLogin = await loginUser({"email":email});
        console.log(didLogin);
        if(didLogin){
            setErrorMessage("")
            setError(false)
            console.log("User Logged In successfully")
            // please Redirect him to dashboard
            navigate('/dashboard')
            
        }
        else{
            setError(true)
            setErrorMessage("Email Not Found")
        }
    }

    return (
            <Grid container xs={8}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{position : "absolute", margin:"auto",left:0, top:0, right:0,bottom:0}} >

            <Grid item >
            <Card sx={{ minWidth: 500 }}>
            <center sx={{ marginTop: 3 }} >
                <img width={40} height={40} src={maersk} />
            </center>
            <Typography
                variant="h4"
                color="textSecondary"
                component="h4"
                gutterBottom
            >
                Login
            </Typography>

            <TextField
           error={isError}
          id="outlined-error-helper-text"
          label="Email"
          onChange={e => setEmail(e.target.value)}
          //defaultValue="Hello World"
          placeholder='Enter your email'
          helperText={errorMessage}
          sx={{ m: 1 , width : '50ch'}}
        />
        <br></br>
        <Button onClick={handleSubmit} variant="contained" sx={{width:'30ch', marginTop : '10px', marginBottom: 3 }}>Login</Button>
                </Card>
            </Grid>

            </Grid>

    )
}

export default Login