import React from 'react';
import { Container, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material/';
import EditableTable from './Table/EditableTable';
import adminFields from './Table/adminFields';
const defaultData = [
    {
      "adminName":"admin 1",
      "email":"admin1@maersk.com"
    }
  ];
const Admin = () => {
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
        <EditableTable
        initWithoutHead
        defaultData={defaultData}
        getData={getData}
        fieldsArr={adminFields}
        />
    </Container>
    ); 
}
 
export default Admin;