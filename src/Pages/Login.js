import React from 'react'
import { Container, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material/';

const Login = () => {
    return (
        <Container size="sm">
            <Typography
                sx={{ marginTop: 3 }}
                variant="h4"
                color="textSecondary"
                component="h4"
                gutterBottom
            >
                Login
            </Typography>
        </Container>
    )
}

export default Login