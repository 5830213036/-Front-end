import React from "react";
// Css
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import '../App.css'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    "&.MuiButton--chubby": {
      borderRadius: 50
    },
    "&.MuiButton--gradient": {
      minWidth: 200,
      transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
      background:
        "linear-gradient(to right, #FFC371, #FF5F6D)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      "&:hover": {
        transform: "scale(1.1)"
      }
    }
  },
  button: {
    margin: theme.spacing(1),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));
const ProdList = ({ prodList }, index) => {
  const classes = useStyles();
  return (
    <div key={index}>
      {prodList.map(prodLists => (
        <CardActionArea>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={prodLists.image_url}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs> 
                      <Typography gutterBottom variant="h6">
                        {prodLists.name}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {prodLists.description}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" align="center" className="pcolor">
                      ฿{prodLists.price}
                    </Typography>
                    <Link to={`product/${prodLists.id}`}>
                      <Button
                        variant="contained"
                        align="center"
                        className={classes.button}
                      >
                        Detail
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </CardActionArea>
      ))}
    </div>
  );
};

export default ProdList;
