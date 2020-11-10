import React from "react";
import PropTypes from "prop-types";
import {
  Paper,
  TextField,
  Button,
  makeStyles,
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  Collapse,
  IconButton,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  avatarLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
    justifyItems: "center",
    alignContent: "center",
  },
  inline: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  formElement: {
    marginTop: theme.spacing(2),
  },
}));

function SearchForm(props) {
  const { inputs, clickHandler, handleBack } = props;
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Typography variant="h5">
        Welcome to the Search section, input your query below
      </Typography>
      <form>
        <div className={classes.inline}>
          <TextField
            id="offset-input"
            label="Offset"
            variant="outlined"
            size="small"
            value={inputs.offset}
            onChange={inputs.offsetHandler}
          />
          <TextField
            id="size-input"
            label="Size"
            variant="outlined"
            size="small"
            value={inputs.size}
            onChange={inputs.sizeHandler}
          />
          {/*<FormControlLabel
            control={
              <Checkbox
                checked={inputs.check}
                onChange={inputs.checkHandler}
                name="aggregators"
              />
            }
            label="Aggregators"
          />*/}
        </div>

        <div className={classes.inline}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="type-of-search"
              name="searchType"
              value={inputs.radio}
              onChange={inputs.radioHandler}
            >
              <FormControlLabel
                value="jobs"
                control={<Radio />}
                label="Oportunities"
              />
              {/*<FormControlLabel
                value="people"
                control={<Radio />}
                label="People"
              />*/}
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.inline}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<SearchOutlinedIcon />}
            onClick={clickHandler}
          >
            Search
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<PersonIcon />}
            onClick={handleBack}
          >
            Profile
          </Button>
        </div>
        <div>
          <Collapse in={inputs.alert} className={classes.formElement}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={inputs.alertHandler}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Please enter a value in the fields above
            </Alert>
          </Collapse>
        </div>
      </form>
    </Paper>
  );
}

SearchForm.propTypes = {
  inputs: PropTypes.object.isRequired,
  clickHandler: PropTypes.func,
  handleBack: PropTypes.func,
};

export { SearchForm };
