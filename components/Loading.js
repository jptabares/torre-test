import { React, useState } from "react";
import { useRouter } from "next/router";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/Home.module.css";
import makeStyles from "@material-ui/core/styles/makeStyles";
import theme from "../styles/theme";

const cardStyles = makeStyles({
  root: {
    minWidth: 800,
    backgroundColor: "#d3d3d3",
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 14,
  },
  form: {
    margin: theme.spacing(0),
  },
  formElement: {
    marginTop: theme.spacing(2),
  },
});

function Loading() {
  const classes = cardStyles();

  return (
    <Container maxWidth="sm" className={styles.main}>
      <Card>
        <CardContent>
          <Typography className={classes.title} align="center" variant="h2">
            Loading
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export { Loading };

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
