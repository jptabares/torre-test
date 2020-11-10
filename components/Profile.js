import React from "react";
import PropTypes from "prop-types";
import {
  CardHeader,
  IconButton,
  Typography,
  Chip,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import Link from "./Link";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import SearchIcon from "@material-ui/icons/Search";

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
  const { avatar, name, title, location, action } = props;
  const classes = useStyles();

  return (
    <CardHeader
      action={
        <IconButton aria-label="Job Oportunities" onClick={action}>
          <SearchIcon />
        </IconButton>
      }
      /*action={
        <Button color="primary" component={Link} naked href="/search">
          Jobs
        </Button>
      }*/
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
  action: PropTypes.func,
};

export { Profile };
