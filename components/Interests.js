import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Chip, makeStyles } from "@material-ui/core";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";

const useStyles = makeStyles((theme) => ({
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function Interests(props) {
  const { data } = props;
  const classes = useStyles();

  const List = data.map((interest) => {
    return <Chip key={interest.id} label={interest.name} />;
  });

  return (
    <Grid item xs>
      <Typography
        variant="h5"
        style={{ display: "flex", alignItems: "center" }}
      >
        <GradeOutlinedIcon /> Interests
      </Typography>
      <div className={classes.chips}>{List}</div>
    </Grid>
  );
}

Interests.propTypes = {
  data: PropTypes.array.isRequired,
};

export { Interests };
