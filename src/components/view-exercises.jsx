import React from "react";
import PropTypes from "prop-types";
// @material-ui/core .
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
// core .
import GridItem from "./Grid/GridItem.jsx";
import GridContainer from "./Grid/GridContainer.jsx";
import Card from "./Card/Card.jsx";
import CardHeader from "./Card/CardHeader.jsx";
import CardBody from "./Card/CardBody.jsx";

import iconsStyle from "../assets/jss/material-dashboard-react/views/iconsStyle.jsx";

function Icons(props) {
    const { classes } = props;
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card >
                        <CardHeader plain color="primary">
                            <h4 className={classes.cardTitleWhite}>Ejercicio recomendado</h4>
                            <p className={classes.cardCategoryWhite}>
                                Cada hora te recomendamos realizar un ejercicio diferente
                                para cuidar de tu salud
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Hidden only={["sm", "xs"]}>
                                <iframe
                                    className={classes.iframe}
                                    src="https://www.youtube.com/embed/o2bV4OBQ2Y4"
                                    title="Icons iframe"
                                    allowFullScreen
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media">
                                    <p>Your browser does not support iframes.</p>
                                </iframe>
                            </Hidden>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}

Icons.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
