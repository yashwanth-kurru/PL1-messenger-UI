import React from 'react';
import { Container, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material/';
import EditableTable from './Table/EditableTable';
import categoryFields from './Table/categoryFields';
const defaultData = [
    {
      "categoryName":"category 1",
      "categoryDescription":"categoryDescription is very nice"
    }
  ];
const Categories = () => {
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
        >Categories</Typography>
        <EditableTable
        initWithoutHead
        defaultData={defaultData}
        getData={getData}
        fieldsArr={categoryFields}
        />
    </Container>
     );
}
 
export default Categories;