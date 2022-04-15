import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import CardComp from '../Components/CardComp';
import { Container, Grid } from "@mui/material/"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Post() {
    const [Notes, setNotes] = useState([]);
    const menuItems = [
        {
            id: "1",
            name: "Notes",
        },
        {
            id: "2",
            name: "Create Note",
        },
        {
            id: "3",
            name: "Profile",
        },
        {
            id: "4",
            name: "Settings",
        }
    ]

    useEffect(() => {
        fetch('http://localhost:5000/notes')
            .then(praveen => praveen.json())
            .then(data => setNotes(data))

        // menuItems.map(menuItem => console.log(menuItem))
        var marr = menuItems.filter(menuItem => menuItem.id !== "4")
        console.log(marr)


    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:5000/notes/' + id, { method: 'DELETE' })
        const newnotes = Notes.filter(note => note.id !== id)
        setNotes(newnotes);
    }

    return <div>
        <Typography sx={{ marginTop: 1 }} variant="h4" color="textSecondary" component="h3" align="center">
            Notes List
        </Typography>
       

        <Grid container spacing={2}   direction="row"
            justifyContent="center"
            alignItems="flex-start" >

            <Grid item xs={3} >
                        
                <Item>xs=4</Item>
                    
            </Grid>

            <Grid sx={{marginLeft : 2}} item xs={12} md={6} lg={5} >        
                {Notes.map(note => (
                            <CardComp key={note.id} data={note} handleDelete={handleDelete} />
                    ))}
            </Grid>

            <Grid item xs={3} >
            
                <Item>xs=4</Item>
               
            </Grid>

        </Grid>
    </div >;
}

export default Post;
