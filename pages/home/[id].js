import React from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { Paper, Grid, makeStyles, Container } from "@material-ui/core";
import { ChipColumn, Profile, Experiences, Loading } from "../../components/";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import FitnessCenterOutlinedIcon from "@material-ui/icons/FitnessCenterOutlined";
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
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { data, status } = useQuery(
    ["bio", id],
    () => {
      return fetch("/api/bio?id=" + id).then((res) => res.json());
    },
    { enabled: id, refetchOnWindowFocus: false }
  );

  if (status === "loading" || typeof data === "undefined") {
    return <Loading />;
  }

  const handleProfileClick = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { pid: id },
    });
  };

  const arExperiences = [...data?.experiences].sort((a, b) => {
    return (
      b.fromYear - a.fromYear ||
      months.indexOf(b.fromMonth) - months.indexOf(a.fromMonth)
    );
  });

  const arStats = Object.keys(data?.stats).map((i) => {
    return { id: i, name: data?.stats[i] };
  });

  return (
    <Container>
      <Grid container spacing={2} className={classes.root} direction="column">
        <Grid item xs>
          <Grid container justify="center" spacing={1}>
            <Paper elevation={0} className={classes.paper}>
              <Profile
                avatar={data?.person.picture}
                name={data?.person.name}
                title={data?.person.professionalHeadline}
                location={data?.person.location.name}
                action={handleProfileClick}
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
                    data={arStats}
                    icon={<EqualizerOutlinedIcon />}
                    title="Stats"
                    isObject={true}
                  />
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container justify="center" spacing={1}>
            {data?.experiences.length > 0 && (
              <Experiences data={arExperiences} />
            )}
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container justify="center" spacing={1}>
            {typeof data?.stats !== "undefined" > 0 && (
              <ChipColumn
                data={data?.strengths}
                icon={<FitnessCenterOutlinedIcon />}
                title="Strengths"
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
