import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';

const useStyles = makeStyles((theme)=>({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  

const CreateNote = () => {
    const classes = useStyles();
    const [Title, setTitle] = useState('')
    const [Desc, setDesc] = useState('')
    const [category, setCategory] = useState('money')
    const [terr, setTer] = useState(false);
    const [derr, setDerr] = useState(false);
    const history = useNavigate();

    const [age, setAge] = React.useState('');
    const [personName, setPersonName] = React.useState([]);

    const multihandleChange = (event) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };


    const handleChange = (event) => {
        setAge(event.target.value);
    };


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
                    label="Post Title"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={terr}
                />
                <TextField
                    sx={{ display: 'block', marginTop: 3, marginBottom: 3 }}
                    onChange={(e) => setDesc(e.target.value)}
                    label="Message"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={derr}
                />
                <FormControl variant="outlined" fullWidth  sx={{ marginTop: 3, marginBottom: 3 }} >
                    <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Category"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

            <FormControl fullWidth  sx={{ marginBottom: 3 }}>
                <InputLabel id="demo-multiple-checkbox-label">Channels</InputLabel>
                <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={multihandleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                >
                {names.map((name) => (
                    <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                    </MenuItem>
                ))}
                </Select>
            </FormControl>

                <Button className={classes.root} color="primary" variant="contained" type="submit">Submit</Button>
            </form>
        </Container>
    )
};

export default CreateNote;
