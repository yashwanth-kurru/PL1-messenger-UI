import React,{useState,useEffect} from 'react';
import { Container, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material/';
import EditableTable from './Table/EditableTable';
import adminFields from './Table/adminFields';
import {GetAdminsData} from '../API/service';
const defaultData = [
    {
      "adminName":"admin 1",
      "email":"admin1@maersk.com"
    }
  ];
const Admin = () => {

    const [admin,setAdmin] = useState([{}]);

    useEffect(() => {
      GetAdminsData()
      .then((admins)=>{
        console.log(admins);
        setAdmin(admins.data);
      })
    }, []);

    const getData = row => {
        console.log(row, "rows data");
      };
    return ( 
        <Container size="sm">
        <Typography
              variant="h4"
              color="textSecondary"
              component="h4"
              gutterBottom
        >Admins</Typography>
       {admin.length > 1 ?  <EditableTable
        initWithoutHead
        defaultData={admin}
        getData={getData}
        fieldsArr={adminFields}
        />:null}
    </Container>
    ); 
}
 
export default Admin;