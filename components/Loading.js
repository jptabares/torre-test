import { React, useState } from "react";
import { useRouter } from "next/router";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
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
  const router = useRouter();
  const classes = cardStyles();
  const [uname, setUname] = useState("");
  const [aStatus, setAStatus] = useState(false);
  const [aSeverity, setASeverity] = useState("success");
  const [aMessage, setAMessage] = useState("Nothing's wrong");

  const handleUname = (e) => {
    setUname(e.target.value);
  };

  const handleClick = (e) => {
    setAStatus(false);
    if (uname) {
      router.push("/home/" + uname);
    } else {
      setAStatus(true);
      setASeverity("error");
      setAMessage("Please input your Torre username in the text field above.");
    }
  };

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
