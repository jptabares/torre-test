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

function Strengths(props) {
  const { data } = props;
  const classes = useStyles();

  const List = data.map((row) => {
    return <Chip key={row.id} label={row.name} />;
  });

  return (
    <Grid item xs>
      <Typography
        variant="h5"
        style={{ display: "flex", alignItems: "center" }}
      >
        <GradeOutlinedIcon /> Strengths
      </Typography>
      <div className={classes.chips}>{List}</div>
    </Grid>
  );
}

Strengths.propTypes = {
  data: PropTypes.array.isRequired,
};

export { Strengths };
