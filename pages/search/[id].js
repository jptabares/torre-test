import React from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { Paper, Grid, makeStyles, Container } from "@material-ui/core";
import { Job, Loading } from "../../components/";
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
  const { id, pid } = router.query;
  const { data, status } = useQuery(
    ["job", id],
    () => {
      return fetch("/api/job?id=" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    },
    { enabled: id, refetchOnWindowFocus: false }
  );

  if (status === "loading") {
    return <Loading />;
  }

  const handleProfileClick = (e) => {
    e.preventDefault();
    router.push("/search");
  };

  const handleBackSearch = (e) => {
    router.push({
      pathname: "/search",
      query: { pid },
    });
  };

  return (
    <Container>
      <Grid container spacing={2} className={classes.root} direction="column">
        <Grid item xs>
          <Job job={data} profileId={pid} handleSearch={handleBackSearch} />
        </Grid>
      </Grid>
    </Container>
  );
}
