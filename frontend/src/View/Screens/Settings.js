// Imports
import { push as Menu } from "react-burger-menu";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import "./Settings.css";
import "./Main.css";
import ToggleButton from "../Components/ToggleButton";
import { Button, TextField, FormControl } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStylesReddit = makeStyles((theme) => ({
  root: {
    height: 50,
    width: "auto",
    border: "1px solid #e2e2e1",
    fontSize: 15,
    overflow: "hidden",
    borderRadius: 1,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 1px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();
  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

function Settings({ switchFunction, darkMode }) {
  var styles = {
    bmBurgerButton: {
      position: "absolute",
      width: "5vw",
      height: "5vh",
      right: "5%",
      top: "3vh",
    },
    bmBurgerBars: {
      background: "white",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: darkMode ? "#373A47" : "#757B95",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "white",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  //const [show, setShow] = useState(false)
  const [currentName, setCurrentName] = useState();

  return (
    <Menu
      customBurgerIcon={<FontAwesomeIcon icon={faCog} color="white" />}
      right
      styles={styles}
      isOpen={false}
      width={"360px"}
    >
      <p style={{ fontSize: 25 }}>Settings</p>
      <br />

      <p>Change Name</p>
      <br />
      <RedditTextField
        label="Name"
        // className={classes.margin}
        defaultValue=""
        variant="filled"
        id="reddit-input"
        onChange={(e) => {
          e.preventDefault();
          setCurrentName(e.target.value);
          console.log(currentName);
        }}
      />
      <Button
        variant="contained"
        style={{ height: 50 }}
        onClick={(e) => {
          // e.preventDefault();
          if (currentName === undefined || currentName === "") {
            alert("Error: Invalid Name");
          } else {
            const data = JSON.stringify({ name: currentName });
            fetch("https://plamp-123.herokuapp.com/plamp/name", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: data,
            });
            alert(`Everglow name changed to ${currentName}`);
            window.location.reload();
          }
        }}
      >
        Enter
      </Button>

      <br />
      <p>Dark mode</p>
      <ToggleButton onClick={switchFunction} checked={darkMode || false} />
      <br />
    </Menu>
  );
}

export default Settings;
