import React, { useState } from 'react';
import { PageStyled, Map } from './styles';
import { descripitionCounties } from '../../assets/data/pages/counties';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { MapContainer, Marker, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const Counties = () => {
    const [counties, setCounties] = useState(descripitionCounties);

    const customIcon = new Icon({
        iconUrl: require("../../assets/loc.png"),
        iconSize: [32, 32]
    });
    return (
        <PageStyled>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Conheca os municipios</h1>

                        <h6>Aqui estão os municipios que compõem nossa pesquisa</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Map>
                            <MapContainer style={{ height: "75vh"}} zoom={8.3} center={[-24.8, -53.75]} id="mapId" attributionControl={false} zoomControl={false} >
                                <TileLayer url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png" />
                                {
                                    counties.map(counties => {
                                        return (
                                            <Marker position={counties.geocode} icon={customIcon}>
                                                <Popup>
                                                    <Card style={{ width: '15rem' }}>
                                                        <Card.Img variant="top" src={require('../../assets/cidade.jpg')} />
                                                        <Card.Body>
                                                            <Card.Title>{counties.name}</Card.Title>
                                                            <Card.Text>
                                                                {counties.description}
                                                            </Card.Text>
                                                            <Button variant="primary" href={counties.link} target="_blank">Ver Mais</Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Popup>
                                            </Marker>
                                        )
                                    })
                                }
                            </MapContainer>
                        </Map>
                    </Col>
                </Row>
            </Container>
        </PageStyled>
    );
};

export default Counties;