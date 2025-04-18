import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type Prop = {
  content: string,
  bool: boolean
}


export default function CustomizedSnackbars({content, bool}: Prop) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(bool);
  }, [bool]);


  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {content}
        </Alert>
      </Snackbar>
    </div>
  );
}
