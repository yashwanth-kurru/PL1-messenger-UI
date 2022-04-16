import React,{useState,useEffect} from 'react';
import { Container, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material/';
import EditableTable from './Table/EditableTable';
import categoryFields from './Table/categoryFields';
import { GetCategoriesData } from '../API/service';
const defaultData = [
    {
      "categoryName":"category 1",
      "categoryDescription":"categoryDescription is very nice"
    }
  ];
const Categories = () => {

  const [category,setcategory] = useState([{}]);

  useEffect(() => {
    GetCategoriesData()
    .then((categories) => {
      console.log(categories.data)
       setcategory(categories.data)
    })
    .catch((error) => console.log(error))
  }, []);

    const getData = row => {
        console.log(row, "rows data");
      }
      

    return ( 
        <Container size="sm">
        <Typography
              variant="h4"
              color="textSecondary"
              component="h4"
              gutterBottom
        >Categories</Typography>
       {category.length > 1 ?  <EditableTable
        initWithoutHead
        defaultData={category}
        getData={getData}
        fieldsArr={categoryFields}
        />: null}
    </Container>
     );
}
 
export default Categories;