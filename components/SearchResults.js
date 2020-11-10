import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Container,
  Avatar,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import Link from "./Link";
import { ChipColumn } from "./ChipColumn";

const useStyles = makeStyles((theme) => ({
  cardAvatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  card: {
    margin: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

function SearchResults(props) {
  const { data, profileId } = props;
  const classes = useStyles();
  const router = useRouter();

  if (typeof data === "undefined") {
    return null;
  }

  const Cards = data.results.map((res) => {
    return (
      <Grid item key={res.id}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                className={classes.cardAvatar}
                src={res.organizations[0].picture}
                alt={res.id + "-avatar"}
              />
            }
            title={res.objective}
            subheader={res.organizations[0].name + ", " + res.type}
          />
          <CardContent>
            <Container>
              <Grid container justify="center" spacing={2}>
                {res.skills.length > 0 && (
                  <ChipColumn
                    data={res.skills}
                    icon={<GradeOutlinedIcon />}
                    title="Skills"
                    keys={["name", "name", "experience"]}
                  />
                )}
                {res.locations.length > 0 && (
                  <ChipColumn
                    data={res.locations}
                    icon={<LocationOnOutlinedIcon />}
                    title="Locations"
                  />
                )}
                {res.members.length > 0 && (
                  <ChipColumn
                    data={res.members}
                    icon={<PeopleOutlinedIcon />}
                    title="Responsible"
                    isMember
                  />
                )}
              </Grid>
              <Grid content justify="center" spacing={2}></Grid>
            </Container>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              naked
              onClick={(e) => {
                router.push({
                  pathname: "/search/" + res.id,
                  query: { pid: profileId },
                });
              }}
            >
              View
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <div>
      <Typography variant="subtitle1" align="left">
        Results:
      </Typography>
      {Cards}
    </div>
  );
}

SearchResults.propTypes = {
  data: PropTypes.object,
  profileId: PropTypes.string,
};

export { SearchResults };
