import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import CardComp from '../Components/CardComp';
import { Container, Grid } from "@mui/material/"

function Notes() {
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
        <Typography sx={{ marginTop: 3 }} variant="h4" color="textSecondary" component="h3" align="center">
            Notes List
        </Typography>
        <Container sx={{ marginTop: 5 }}>
            <Grid container direction="row" spacing={3}>
                {Notes.map(note => (
                    <Grid item xs={12} md={6} lg={4} key={note.id}>
                        <CardComp data={note} handleDelete={handleDelete} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    </div >;
}

export default Notes;
