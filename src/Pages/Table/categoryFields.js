const categoryFields = [
    {
        label: "Category Name",
        name: "categoryName",
        validation: e => {
            const name = e.target.value;
            if (name.length > 6) {
              return false;
            } else {
              return true;
            }
          },
          error: "Enter a good name"
    },
    {
        label: "Category Description",
        name: "categoryDescription",
        validation: e => {
            const name = e.target.value;
            if (name.length > 6) {
              return false;
            } else {
              return true;
            }
          },
          error: "Enter a good name"
    },
   
];
export default categoryFields;