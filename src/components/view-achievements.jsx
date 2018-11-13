import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

import Card from "./Card/Card.jsx";
import CardBody from "./Card/CardBody.jsx";
import CardHeader from "./Card/CardHeader.jsx";
import Table from "./Table/Table.jsx";

import dashboardStyle from "../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import GridItem from "./Grid/GridItem";
import GridContainer from "./Grid/GridContainer";

import { getCurrentDateString, getCurrentTimeString } from '../js/utils-time'

class Dashboard extends Component {

    render() {

        const { classes } = this.props;

        return (
            <div>
                <div>Logros</div>
                <hr/>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card>
                            <CardHeader color="info">
                                <h4 className={classes.cardTitleWhite}>Tabla de líderes</h4>
                                <p className={classes.cardCategoryWhite}>
                                    Actualizada por última vez el día { getCurrentDateString() } a las { getCurrentTimeString() }
                                </p>
                            </CardHeader>
                            <CardBody>
                                <Table
                                    tableHeaderColor="warning"
                                    tableHead={["Posición", "Nombre", "Puntos"]}
                                    tableData={[
                                        ["1", "Julian Salinas", "1500"],
                                        ["2", "Aquiles El Perro", "750"],
                                        ["3", "Luna la Gata Negra", "600"]
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }

}

export default withStyles(dashboardStyle)(Dashboard);