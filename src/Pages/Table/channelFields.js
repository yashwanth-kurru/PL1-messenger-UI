const channelFields = [
    {
        label: "Channel Name",
        name: "channelName",
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
        label: "Channel Description",
        name: "channelDescription",
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
export default channelFields;