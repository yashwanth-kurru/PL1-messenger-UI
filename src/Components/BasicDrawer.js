import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Brightness5RoundedIcon from '@mui/icons-material/Brightness5Rounded';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import maersk from '../assets/maersk.png';

const drawerWidth = 240;

const menuItems = [
    {
        name: "Posts",
        icon: <NotesRoundedIcon color="primary" />,
        path: '/dashboard'
    },
    {
        name: "Create Post",
        icon: <AddCircleOutlineRoundedIcon color="primary" />,
        path: '/create'
    },
    {
        name: "Users",
        icon: <PersonRoundedIcon color="primary" />,
        path: '/users'
    },
    {
        name: "Channels",
        icon: <PersonRoundedIcon color="primary" />,
        path: '/channels'
    },
    {
        name: "Categories",
        icon: <Brightness5RoundedIcon color="primary" />,
        path: '/categories'
    },
    {
        name: "Admins",
        icon: <Brightness5RoundedIcon color="primary" />,
        path: '/admins'
    },
    {
        name : "Profile",
        icon: <PersonRoundedIcon color="primary" />,
        path: '/profile'

    }
]

const useStyles = makeStyles(() => {
    return {
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        active: {
            background: '#f4f4f4'
        },
        menus: {
            flexgrow: 1
        },
        title: {
            padding: 15,
            textDecoration: 'underline',
            textDecoration:'overline'
        },
        imgBorder :{
            border: '2px solid white',
            borderRadius: '10px',
            marginLeft: '-10px',
            marginRight: '10px'
        }
    }
})

export default function BasicDrawer() {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{backgroundColor: '#42b0d5',width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                <Toolbar >
                <img width={40} height={40} className={classes.imgBorder} src={maersk} />
                    <Typography variant="h6" noWrap component="div">
                        MAERSK
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                classes={{ paper: classes.drawerPaper }}
                variant="permanent"
                anchor="left">
                <div>
                    <Typography variant="h5" className={classes.title} >
                        Messenger
                    </Typography>
                </div>

                <Divider />
                <List>
                    {menuItems.map((menu) => (
                        <ListItem button key={menu.name} onClick={() => navigate(menu.path)}>
                            <ListItemIcon >{menu.icon}</ListItemIcon>
                            <ListItemText primary={menu.name} className={classes.menus} />
                        </ListItem>
                    ))}
                </List>
                <Divider />

            </Drawer>

        </Box>
    );
}
