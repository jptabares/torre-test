import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Chip, makeStyles } from "@material-ui/core";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";

const useStyles = makeStyles((theme) => ({
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function Languages(props) {
  const { data } = props;
  const classes = useStyles();

  const List = data.map((lang) => {
    return <Chip key={lang.code} label={lang.language + ", " + lang.fluency} />;
  });

  return (
    <Grid item xs>
      <Typography
        variant="h5"
        style={{ display: "flex", alignItems: "center" }}
      >
        <LanguageOutlinedIcon /> Languages
      </Typography>
      <div className={classes.chips}>{List}</div>
    </Grid>
  );
}

Languages.propTypes = {
  data: PropTypes.array.isRequired,
};

export { Languages };
