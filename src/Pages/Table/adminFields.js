const adminFields = [
    {
        label: 'Admin Name',
        name : "adminName",
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
        label: 'Admin Email',
        name : "email",
        validation: e => {
            const name = e.target.value;
            if (name.length > 6) {
              return false;
            } else {
              return true;
            }
          },
          error: "Enter a good name"
    }
];
export default adminFields;