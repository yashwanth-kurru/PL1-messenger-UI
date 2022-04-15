import React from 'react';
import { Container, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material/';
import EditableTable from './Table/EditableTable';
import channelFields from './Table/channelFields';
const defaultData = [
    {
      "channelName":"Channel1",
      "channelDescription":"channelDescription is very nice"
    }
  ];
const Channels = () => {
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
        >Channels</Typography>
         <EditableTable
        initWithoutHead
        defaultData={defaultData}
        getData={getData}
        fieldsArr={channelFields}
        />
        </Container>
     );
}
 
export default Channels;