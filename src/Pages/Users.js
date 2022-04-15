import React, { Component } from 'react';
import { Container, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material/';
import EditableTable from './Table/EditableTable';
import fieldsArr from './Table/feilds';

const defaultData = [
    {
      name: "Yash",
      age: "23",
      relationShip: "haqSeSingle"
    }
  ];

const Users = () => {
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
            >Users</Typography>

        <EditableTable
        initWithoutHead
        defaultData={defaultData}
        getData={getData}
        fieldsArr={fieldsArr}
        />
        </Container>



     );
}
 
export default Users;