import React from "react";
import PropTypes from "prop-types";
import ChartistGraph from "react-chartist";
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import withStyles from "@material-ui/core/styles/withStyles";

import Card from "./Card/Card.jsx";
import GridItem from "./Grid/GridItem.jsx";
import CardBody from "./Card/CardBody.jsx";
import CardHeader from "./Card/CardHeader.jsx";
import CardFooter from "./Card/CardFooter.jsx";
import GridContainer from "./Grid/GridContainer.jsx";

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart
} from "../variables/charts.jsx";

import dashboardStyle from "../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>Estadísticas</div><hr/>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card chart>
                            <CardHeader color="info">
                                <ChartistGraph
                                    className="ct-chart"
                                    data={dailySalesChart.data}
                                    type="Line"
                                    options={dailySalesChart.options}
                                    listener={dailySalesChart.animation}/>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardTitle}>Mejora del hábito</h4>
                                <p className={classes.cardCategory}>
                                    <span className={classes.successText}>
                                        <ArrowUpward className={classes.upArrowCardCategory} /> 100%
                                    </span>{" "} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a tristique sem.
                                </p>
                            </CardBody>
                            <CardFooter chart>
                                <div className={classes.stats}>
                                    <AccessTime /> Tienes 5 días de haber empezado
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card chart>
                            <CardHeader color="warning">
                                <ChartistGraph
                                    className="ct-chart"
                                    data={emailsSubscriptionChart.data}
                                    type="Bar"
                                    options={emailsSubscriptionChart.options}
                                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                                    listener={emailsSubscriptionChart.animation}
                                />
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardTitle}>Puntaje semanal</h4>
                                <p className={classes.cardCategory}>
                                    Cada vez que ganas un trofeo recibes puntos de compensación
                                </p>
                            </CardBody>
                            <CardFooter chart>
                                <div className={classes.stats}>
                                    <AccessTime /> Es tu primera semana usando el sistema
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card chart>
                            <CardHeader color="danger">
                                <ChartistGraph
                                    className="ct-chart"
                                    data={completedTasksChart.data}
                                    type="Line"
                                    options={completedTasksChart.options}
                                    listener={completedTasksChart.animation}
                                />
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardTitle}>Estado diario</h4>
                                <p className={classes.cardCategory}>
                                    Esta gráfica muestra el ángulo promedio de tu columna
                                    en las últimas horas que tu dispositivo estuvo encendido
                                </p>
                            </CardBody>
                            <CardFooter chart>
                                <div className={classes.stats}>
                                    <AccessTime /> Última actualización hace una hora
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
