import React from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import {
  Avatar,
  Paper,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Typography,
  Card,
} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import { ChipColumn, Profile, Experiences, Loading } from "../../components/";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";

import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import theme from "../../styles/theme";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
    width: "100%",
  },
}));

export default function Home() {
  const router = useRouter();
  const classes = styles();
  const { id } = router.query;

  const { data, status } = useQuery(
    ["bio", id],
    () => {
      return fetch("/api/torre?id=" + id).then((res) => res.json());
    },
    { enabled: id, refetchOnWindowFocus: false }
  );

  console.log(data);

  if (status === "loading") {
    return <Loading />;
  }
  return (
    <div>
      <Grid container spacing={2} className={classes.root} direction="column">
        <Grid item xs>
          <Grid container justify="center" spacing={1}>
            <Paper elevation={0} className={classes.paper}>
              <Profile
                avatar={data?.person.picture}
                name={data?.person.name}
                title={data?.person.professionalHeadline}
                location={data?.person.location.name}
              />
              <Grid container justify="center" spacing={1}>
                {data?.interests.length > 0 && (
                  <ChipColumn
                    data={data?.interests}
                    icon={<GradeOutlinedIcon />}
                    title="Interests"
                  />
                )}
                {data?.languages.length > 0 && (
                  <ChipColumn
                    data={data?.languages}
                    icon={<LanguageOutlinedIcon />}
                    title="Languages"
                    keys={["code", "language", "fluency"]}
                  />
                )}
                {typeof data?.stats !== "undefined" > 0 && (
                  <ChipColumn
                    data={data?.stats}
                    icon={<EqualizerOutlinedIcon />}
                    title="Stats"
                  />
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container justify="center" spacing={1}>
            {data?.experiences.length > 0 && (
              <Experiences data={data?.experiences} />
            )}
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container justify="center" spacing={1}>
            Strengths
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
