import React from "react";
import { Row, Col } from "react-awesome-styled-grid";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import CardActionArea from "@material-ui/core/CardActionArea";
// import { ButtonToolbar } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    padding: "0 100px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: 200
  },
  img: {
    margin: "auto",
    display: "block",
    // maxWidth: "100%",
    // maxHeight: "100%"
    height: 200,
    width: "100%"
  },
  imgs: {
    margin: "auto",
    display: "block",
    maxWidth: "20%",
    maxHeight: "20%"
  }
}));
const Main = styled.div`
  margin: 20px auto 50px auto;
  width: 90%;
`;
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none;
  border-radius: 0.5rem;
  border-color: #c4c4c4;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px hsla(0, 0%, 76.9%, 0.4);
  margin-top: 20px;
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`;
const CardTitle = styled.div`
  text-transform: capitalize;
  font-weight: 600;
`;
const CardSubtitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-transform: capitalize;
  color: #787878;
  a {
    text-decoration: none;
    color: #00b1ff;
  }
`;
const GridL = ({ gridList }, index) => {
  const classes = useStyles();
  return (
    <div key={index}>
      <Main>
        <Row>
          {gridList.map(gridLists => (
            <Col xs={4} md={2} key={gridLists.round}>
              
                <Card><CardActionArea>
                  <ButtonBase>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={gridLists.image_url}
                    />
                  </ButtonBase>
                  <CardBody>
                    <CardTitle>
                      <Grid item>
                        <img
                          className={classes.imgs}
                          alt="complex"
                          src={gridLists.brand_info.url}
                        />
                      </Grid>
                      <Grid item xs>
                        <Typography noWrap>{gridLists.name}</Typography>
                      </Grid>
                    </CardTitle>
                    <CardSubtitle>
                      {" "}
                      <Typography noWrap>{gridLists.description}</Typography>
                    </CardSubtitle>
                    <CardSubtitle>
                      <Typography
                        variant="subtitle1"
                        align="right"
                        className="pcolor"
                      >
                        ฿{gridLists.price}
                      </Typography>
                    </CardSubtitle>
                    <Link to={`product/${gridLists.id}`}>
                      <Button
                        variant="contained"
                        align="center"
                        className={classes.button}
                      >
                        Detail
                      </Button>
                    </Link>
                  </CardBody>
                </CardActionArea></Card>
              
            </Col>
          ))}
        </Row>{" "}
      </Main>
    </div>
  );
};

export default GridL;
