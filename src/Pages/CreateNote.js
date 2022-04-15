import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material/';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

const CreateNote = () => {
    const classes = useStyles();
    const [Title, setTitle] = useState('')
    const [Desc, setDesc] = useState('')
    const [category, setCategory] = useState('money')
    const [terr, setTer] = useState(false);
    const [derr, setDerr] = useState(false);
    const history = useNavigate();


    const handleSubmit = (e) => {
        var body = {
            title: Title,
            details: Desc,
            category: category
        }
        console.log(body)
        e.preventDefault();
        setTer(false);
        setDerr(false);
        if (Title === '')
            setTer(true)
        if (Desc === '')
            setDerr(true)

        if (Title && Desc) {
            fetch('http://localhost:5000/notes', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            }).then(() => history('/'))
        }
    }

    return (
        <Container size="sm">
            <Typography
                sx={{ marginTop: 3 }}
                variant="h4"
                color="textSecondary"
                component="h4"
                gutterBottom
            >
                Create a New Note
            </Typography>

            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <TextField
                    sx={{ display: 'block', marginTop: 3 }}
                    onChange={(e) => setTitle(e.target.value)}
                    label="Note Title"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={terr}
                />
                <TextField
                    sx={{ display: 'block', marginTop: 3, marginBottom: 3 }}
                    onChange={(e) => setDesc(e.target.value)}
                    label="Description"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={derr}
                />
                <FormControl sx={{ display: 'block', marginTop: 3, marginBottom: 3 }}>
                    <FormLabel  >Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="money" control={<Radio />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                        <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                    </RadioGroup>
                </FormControl>

                <Button className={classes.root} color="primary" variant="contained" type="submit">Submit</Button>
            </form>
        </Container>
    )
};

export default CreateNote;
