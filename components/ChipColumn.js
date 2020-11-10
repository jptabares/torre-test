import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Chip, makeStyles, Avatar } from "@material-ui/core";

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
  const { data, icon, title, keys, isObject, isMember, jobLoc, jobRes } = props;
  const classes = useStyles();
  let List;
  if (!jobLoc && !jobRes) {
    List = data.map((row, index) => {
      if (typeof keys != "undefined")
        return (
          <Chip
            key={row[keys[0]]}
            label={row[keys[1]] + " - " + row[keys[2]]}
          />
        );
      else if (isObject)
        return <Chip key={row.id} label={row.id + " (" + row.name + ")"} />;
      else if (isMember)
        return (
          <Chip
            key={row.subjectId}
            avatar={<Avatar alt={row.username} src={row.picture} />}
            label={row.name}
          />
        );
      else if (typeof row !== "object") return <Chip key={index} label={row} />;
      return <Chip key={row.id} label={row.name} />;
    });
  } else if (jobLoc) {
    List = (
      <>
        {data.remote && <Chip label="Remote" />}
        {data.anywhere && <Chip label="Anywhere" />}
        {data.location.length > 0
          ? data.location.map((r, i) => {
              return <Chip key={i} label={r.id} />;
            })
          : null}
      </>
    );
  } else if (jobRes) {
    List = (
      <>
        {data.map((r, i) => {
          return (
            <Chip
              key={r.id}
              avatar={<Avatar alt={r.person.username} src={r.person.picture} />}
              label={r.person.name}
            />
          );
        })}
      </>
    );
  }

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
  isObject: PropTypes.bool,
  isMember: PropTypes.bool,
  jobLoc: PropTypes.bool,
};

export { ChipColumn };
