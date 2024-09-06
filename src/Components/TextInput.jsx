// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

// export default function TextInput() {
//   return (
//     <Box
//       //   component="form"
//       sx={{ "& > :not(style)": { m: 1, width: "45ch" } }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField
//         id="outlined-basic"
//         // size="small"
//         label="Outlined"
//         variant="outlined"
//         color="success"
//         borderColor="white"
//       />
//       {/* <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" /> */}
//     </Box>
//   );
// }

// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

// export default function TextInput() {
//   return (
//     <Box
//       sx={{ "& > :not(style)": { m: 1, width: "45ch" } }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField
//         id="outlined-basic"
//         label="Outlined"
//         variant="outlined"
//         color="success"
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: "white", // Default border color
//             },
//             "&:hover fieldset": {
//               borderColor: "green", // Border color on hover
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "blue", // Border color when focused
//             },
//           },
//         }}
//       />
//     </Box>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextInput({label}) {
  return (
    <Box
      sx={{ '& > :not(style)': { m: 1, width: '45ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        color="success"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "green", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "blue", // Border color when focused
            },
          },
          "& .MuiInputBase-input": {
            color: "white", // Text color
          },
          "& .MuiInputLabel-root": {
            color: "gray", // Placeholder/label color
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "blue", // Placeholder/label color when focused
          },
        }}
      />
    </Box>
  );
}

