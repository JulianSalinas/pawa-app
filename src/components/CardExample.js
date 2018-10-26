import React from 'react';
import { Button, Card, CardGroup, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class CardExample extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
                <div>
                    
                    <CardGroup deck>
                    

                        <Card >
                            <CardImage className="img-fluid" src="https://www.viajejet.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada-1440x810.jpg" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button color="unique">Unique</Button>
                            </CardBody>
                        </Card>


                        <Card >
                            <CardImage className="img-fluid" src="https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button color="unique">Unique</Button>
                            </CardBody>
                        </Card>

                        <Card >
                            <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"/>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button color="unique">Unique</Button>
                            </CardBody>
                        </Card>
                        
                    </CardGroup>


                    <br/>

                    <CardGroup deck>
                    

                        <Card>
                            <CardBody>
                                <CardTitle>Panel title</CardTitle>
                                <CardTitle tag="h6" sub className="mb-2 text-muted">Panel title</CardTitle>
                                <CardText>Some quick example text to build on the panel title and make up the bulk of the panel's content. </CardText>
                                <a href="#" className="card-link">Panel link</a>
                                <a href="#" className="card-link">Another link</a>
                            </CardBody>
                        </Card>
                    </CardGroup>

                    <br/>
                    <CardGroup deck>
                        <Card>
                        <CardBody>
                            <CardTitle tag="h5">Panel title</CardTitle>
                            <CardText>This is a wider panel with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText small muted>Last updated 3 mins ago</CardText>
                        </CardBody>
                        </Card>
                        <Card>
                        <CardBody>
                            <CardTitle tag="h5">Panel title</CardTitle>
                            <CardText>This panel has supporting text below as a natural lead-in to additional content.</CardText>
                            <CardText small muted>Last updated 3 mins ago</CardText>
                        </CardBody>
                        </Card>
                        <Card>
                        <CardBody>
                            <CardTitle tag="h5">Panel title</CardTitle>
                            <CardText>This is a wider panel with supporting text below as a natural lead-in to additional content. This panel has even longer content than the first to show that equal height action.</CardText>
                            <CardText small muted>Last updated 3 mins ago</CardText>
                        </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            )
        }
}

export default CardExample;