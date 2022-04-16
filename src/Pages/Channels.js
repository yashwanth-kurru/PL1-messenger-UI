import React,{ useState, useEffect} from 'react';
import { Container, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material/';
import EditableTable from './Table/EditableTable';
import channelFields from './Table/channelFields';
import { GetChannelsData } from '../API/service';
const defaultData = [
    {
      "channelName":"Channel1",
      "channelDescription":"channelDescription is very nice"
    }
  ];
const Channels = () => {
  
  const [channels,setChannels] = useState([{}]);

    useEffect(() => {
      GetChannelsData()
      .then((channels) => {
        console.log(channels.data)
        setChannels(channels.data)
      })
      .catch((error) => console.log(error))
    },[]);

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
         {channels.length > 1 ? <EditableTable
        initWithoutHead
        defaultData={channels}
        getData={getData}
        fieldsArr={channelFields}
        /> :null} 
        </Container>
     );
}
 
export default Channels;