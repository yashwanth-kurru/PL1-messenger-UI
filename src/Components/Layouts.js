import React from 'react';
import { makeStyles } from '@mui/styles';
import BasicDrawer from './BasicDrawer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        page: {
            marginTop: 72,
            background: '#f9f9f9',
            width: '100%',
        },
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        date: {
            flexGrow: 1
        },
        active: {
            background: '#f4f4f4'
        },

    }
})
export default function Layouts({ children }) {
    const classes = useStyles()
    return (

        <div className={classes.root}>
            {/* Side Drawer */}
            <BasicDrawer />

            <div className={classes.page}>
                {children}
            </div>
        </div >

    )
}
