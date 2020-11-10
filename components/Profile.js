import React from "react";
import PropTypes from "prop-types";
import {
  CardHeader,
  Typography,
  Chip,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";

const useStyles = makeStyles((theme) => ({
  avatarLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function Profile(props) {
  const { avatar, name, title, location } = props;
  const classes = useStyles();

  return (
    <CardHeader
      avatar={
        <Avatar
          alt="user_profile"
          src={avatar}
          className={classes.avatarLarge}
        />
      }
      title={
        <Typography align="left" variant="h3">
          {name}
        </Typography>
      }
      subheader={
        <Typography align="left" variant="subtitle1">
          <div className={classes.chips}>
            <Chip icon={<WorkOutlineOutlinedIcon />} label={title} />
            <Chip icon={<LocationOnOutlinedIcon />} label={location} />
          </div>
        </Typography>
      }
    />
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
};

export { Profile };
