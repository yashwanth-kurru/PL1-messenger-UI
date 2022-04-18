import React,{useState,useEffect} from 'react';
import { Container, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material/';
import EditableTable from './Table/EditableTable';
import categoryFields from './Table/categoryFields';
import { GetCategoriesData, UpdateCategoryData, deleteCategoryData } from '../API/service';
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

    const editData = async (row) => {
        console.log(row, "rows data");
        let res = await UpdateCategoryData(row);
        console.log(res);
      }
    
    
      const deleteData = async (row) => {
        console.log("deleting", row)
        let res= await deleteCategoryData(row);
        console.log(res);
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
        getData={editData}
        deleteData={deleteData}
        fieldsArr={categoryFields}
        />: null}
    </Container>
     );
}
 
export default Categories;