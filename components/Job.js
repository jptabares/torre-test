import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  makeStyles,
  Avatar,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import { ChipColumn } from "./";
import Link from "./Link";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import SearchIcon from "@material-ui/icons/Search";
import theme from "../styles/theme";

const cardStyles = makeStyles({
  cardAvatar: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
  card: {
    margin: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  subsection: {
    textTransform: "capitalize",
    marginTop: 10,
  },
  subbody: {
    whiteSpace: "pre-line",
  },
});

function Job(props) {
  const { job, profileId, handleSearch } = props;

  if (typeof job === "undefined") return null;

  let Agreement =
    typeof job?.agreement !== "undefined"
      ? job?.agreement.type.includes("-")
        ? job?.agreement.type.split("-").join(" ")
        : job?.agreement.type.code
      : null;

  let Commitment =
    typeof job?.commitment !== "undefined"
      ? job?.commitment.code.includes("-")
        ? job?.commitment.code.split("-").join(" ")
        : job?.commitment.code
      : null;

  const classes = cardStyles();

  return (
    <Card className={classes.card}>
      <CardMedia image={job?.attachments[0].address} title="job-caption" />
      <CardHeader
        avatar={
          <Avatar
            className={classes.cardAvatar}
            src={job?.organizations[0].picture}
            alt={job?.id + "-avatar"}
          />
        }
        title={<Typography variant="h3">{job?.objective}</Typography>}
        subheader={
          <Typography className={classes.subsection} variant="subtitle1">
            {job?.organizations[0].name +
              " - " +
              (Agreement ? Agreement : Commitment)}
          </Typography>
        }
      />
      <CardContent>
        <Container>
          <Grid container justify="center" spacing={2}>
            {job?.members.length > 0 && (
              <ChipColumn
                data={job?.members}
                icon={<PeopleOutlinedIcon />}
                title="Responsible"
                jobRes
              />
            )}
            {job?.place.location.length > 0 && (
              <ChipColumn
                data={job?.place}
                icon={<LocationOnOutlinedIcon />}
                title="Locations"
                jobLoc
              />
            )}
          </Grid>
          <Grid content justify="center" spacing={2}>
            {job?.details.length > 0 &&
              job?.details.map((r, i) => {
                return (
                  <>
                    <Typography variant="h5" className={classes.subsection}>
                      {r.code.includes("-")
                        ? r.code.split("-").join(" ")
                        : r.code}
                    </Typography>
                    <Typography variant="body1" className={classes.subbody}>
                      {r.content}
                    </Typography>
                  </>
                );
              })}
          </Grid>
        </Container>
      </CardContent>
      <CardActions>
        <Button color="primary" naked onClick={handleSearch}>
          <SearchIcon /> Search
        </Button>
        <Button
          color="primary"
          component={Link}
          naked
          href={"/home/" + profileId}
        >
          <ArrowBackIcon /> Profile
        </Button>
      </CardActions>
    </Card>
  );
}

export { Job };

Job.propTypes = {
  job: PropTypes.object,
  profileId: PropTypes.string,
  handleSearch: PropTypes.func,
};

/*
<Box my={4}>
  <Typography variant="h4" component="h1" gutterBottom>
    Next.js example
  </Typography>
  <Link href="/home" color="secondary">
    Go to the main page
  </Link>
  <Link href="/search" color="secondary">
    Go to the search page
  </Link>
</Box>
*/
