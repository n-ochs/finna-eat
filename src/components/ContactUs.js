import React, { useState } from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import emailjs from 'emailjs-com';




const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [buttonText, setButtonText] = useState('contact me');

    const handleChange = (event) => {
        event.target.name === "name" 
        ? setName(event.target.value)
        : event.target.name === "email" 
        ? setEmail(event.target.value)
        : event.target.name === "message" 
        ? setMessage(event.target.value)
        : console.log("error")
      };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, e.target, process.env.REACT_APP_YOUR_USER_ID)
          .then((result) => {
              console.log(result.text);
              result.text ==="OK" ? console.log("it worked") : alert("didnt work")
                setName("")
                setEmail("")
                setMessage("")
                setButtonText('sent')
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Grid container justifyContent="center">
        <Box component="form" className={classes.form} onSubmit={sendEmail}>
          <Typography
            variant="h5"
            style={{
              color: "tomato",
              textAlign: "center",
              
            }}
          >
            Contact Finna-Eat
          </Typography>
          
          <InputField
            id="name"
            name="name"
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
            onChange={(e) => handleChange(e)}
            value={name}
          />
          <br />

          <InputField
            id="email"
            name="email"
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
            onChange={(e) => handleChange(e)}
            value={email}
          />
          <br />
          <InputField
            id="message"
            name="message"
            fullWidth={true}
            label="Message"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
            multiline
            rows={4}
            onChange={(e) => handleChange(e)}
            value={message}
          />
          <br />
          <Button
            type="submit"
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            {buttonText}
          </Button>
        </Box>
      </Grid>
    </Box>
    )
}

export default Contact