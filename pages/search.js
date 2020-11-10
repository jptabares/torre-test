import React, { useState } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import Container from "@material-ui/core/Container";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import { SearchForm, SearchResults } from "../components/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  row: {
    margin: theme.spacing(5),
  },
}));

export default function Search() {
  const classes = useStyles();
  const router = useRouter();
  const { pid } = router.query;
  const [size, setSize] = useState("");
  const [offset, setOffset] = useState("");
  const [check, setCheck] = useState(false);
  const [radio, setRadio] = useState("jobs");
  const [alert, setAlert] = useState(false);

  const { data, refetch } = useQuery(
    ["search", offset],
    async () => {
      return await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: radio,
          aggregate: check,
          size,
          offset,
        }),
      }).then((res) => res.json());
    },
    { enabled: false }
  );

  const searchHandler = () => {
    if (size && offset) {
      setAlert(false);
      refetch();
    } else setAlert(true);
  };

  const inputHandlers = {
    sizeHandler: (e) => setSize(e.target.value),
    size: size,
    offsetHandler: (e) => setOffset(e.target.value),
    offset: offset,
    check: check,
    checkHandler: (e) => setCheck(e.target.checked),
    radio: radio,
    radioHandler: (e) => setRadio(e.target.value),
    alert: alert,
    alertHandler: (e) => setAlert(false),
  };

  const handleBack = (e) => {
    console.log(router.query);
    router.push("/home/" + pid);
  };

  return (
    <Container>
      <Grid container spacing={2} className={classes.root} direction="column">
        <Paper elevation={1} className={classes.paper}>
          <Grid item xs className={classes.row}>
            <Grid container justify="center" spacing="2">
              <SearchForm
                inputs={inputHandlers}
                clickHandler={searchHandler}
                handleBack={handleBack}
              />
            </Grid>
          </Grid>
          <Grid item xs className={classes.row}>
            <Grid container justify="center" spacing="2">
              <SearchResults data={data} profileId={pid} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
}
