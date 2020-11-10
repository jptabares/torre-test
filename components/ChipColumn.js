import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function ChipColumn(props) {
  const { data, icon, title, keys } = props;
  const classes = useStyles();
  let d = data;
  if (typeof data === "object") {
    d = Object.keys(data).map((i) => {
      return { id: i, name: data[i] };
    });
  }

  const List = d.map((row) => {
    if (typeof keys != "undefined") {
      return (
        <Chip key={row[keys[0]]} label={row[keys[1]] + " - " + row[keys[2]]} />
      );
    }
    return <Chip key={row.id} label={row.name} />;
  });

  return (
    <Grid item xs>
      <Typography
        variant="h5"
        style={{ display: "flex", alignItems: "center" }}
      >
        {icon} {title}
      </Typography>
      <div className={classes.chips}>{List}</div>
    </Grid>
  );
}

ChipColumn.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  keys: PropTypes.array,
};

export { ChipColumn };
