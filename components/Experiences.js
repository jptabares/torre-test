import React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Paper,
  Chip,
  makeStyles,
} from "@material-ui/core";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    width: "100%",
  },
  experiences: {
    marginTop: 10,
  },
}));

function Experiences(props) {
  const { data } = props;
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const Experiences = data.map((exp) => {
    return (
      <Accordion
        key={exp.id}
        expanded={expanded === "panel" + exp.id}
        onChange={handleChange("panel" + exp.id)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{exp.name}</Typography>
          <Typography className={classes.secondaryHeading}>
            {exp.fromMonth +
              " " +
              exp.fromYear +
              " to " +
              (typeof exp.toYear != "undefined"
                ? exp.toMonth + " " + exp.toYear
                : "Now")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CardContent>
            <Typography align="left" variant="h5">
              {exp.name}
            </Typography>
            <br />
            <Typography align="left" variant="subtitle1">
              <div className={classes.chips}>
                <Chip
                  icon={<BusinessOutlinedIcon />}
                  label={exp.organizations[0].name}
                />
                <Chip
                  icon={<DateRangeOutlinedIcon />}
                  label={
                    exp.fromMonth +
                    " " +
                    exp.fromYear +
                    " to " +
                    (typeof exp.toYear != "undefined"
                      ? exp.toMonth + " " + exp.toYear
                      : "Now")
                  }
                />
              </div>
            </Typography>
            {exp.responsibilities.length > 0 ? (
              exp.responsibilities.map((r, i) => {
                return (
                  <Typography key={i} align="justify">
                    {r}
                  </Typography>
                );
              })
            ) : (
              <Typography align="justify">
                There's no responsabilities registered to this experience.
              </Typography>
            )}
          </CardContent>
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <Paper elevation={0} className={classes.paper}>
      <Typography variant="h5">Experiences</Typography>
      <br />
      <Typography align="justify">
        These are the processes that the user has gone through, and possibly is
        still coursing, be it jobs, projects or education
      </Typography>
      <div className={classes.experiences}>{Experiences}</div>
    </Paper>
  );
}

Experiences.propTypes = {
  data: PropTypes.array.isRequired,
};

export { Experiences };
