import { GraphicProps } from "../../interfaces";
import { GeoJSON, MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import { Section } from "../Section/Section";
import { Legend } from "../Legend/Legend";
import Reference from "../References/Reference";
import Download from "../Button/DownloadFile";
import { Legenda } from './style';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function style(feature: any) {

  if (feature.properties.colors != null) {
    return {
      fillColor: feature.properties.colors,
      fillOpacity: 1,
      color: "black",
      weight: .7
    };
  } else {
    return {
      fillColor: '#08a5ee',
      fillOpacity: 0.3,
      color: "black",
      weight: 1
    };
  }
}

const onEachFeature = (atr: any, layer: any) => {
  const atr_n = atr.properties.atr;
  const atr_nome = atr.properties.nome + ": " + String(atr.properties.atr);

  if (atr_n != null) {
    layer.on('mouseover', function e() {
      if (atr.properties.nome === undefined)
        layer.bindPopup(atr_n).openPopup();
      else
        layer.bindPopup(atr_nome).openPopup();
    })
  }
};

function legend(props) {
  if (window.screen.width >= 1000) {
    if (props.edit === false) {
      return <Legend info={props.graphic?.map_legs} atr={props.graphic?.map_value} reference={props.graphic?.map_refs} />
    }
  }
  else {
    if (props.edit === false) {
      return (<Legenda>
        <Container>
          <Row>
            <Col>
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">
                  <Legend info={props.graphic?.map_legs} atr={props.graphic?.map_value} reference={props.graphic?.map_refs} />
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
        </Container>
      </Legenda>);
    }
  }
  console.log(window.screen.width)
}

export const Graphic: React.FC<GraphicProps> = (props) => {
  if (props.edit === false) {
      return (
        <MapContainer style={{ height: "80vh", }} zoom={8} center={[-24.8, -53.75]} id="mapId" attributionControl={false} zoomControl={false} >
          <TileLayer url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png" />
          <GeoJSON data={JSON.parse(props.data)} style={style} onEachFeature={onEachFeature} />
          <Section id={props.graphic?.map_id} isOverGraphic={true} />
          <Legend info={props.graphic?.map_legs} atr={props.graphic?.map_value} reference={props.graphic?.map_refs} />
          <ZoomControl position="bottomright" />
          <Download {...props.downloadProps} />
        </MapContainer>
      );
  } else {
    return (
      <MapContainer style={{ height: "100vh", }} zoom={8} center={[-24.8, -53.75]} id="mapId" attributionControl={false} zoomControl={false} >
        <TileLayer url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png" />
        <GeoJSON data={JSON.parse(props.data)} style={style} onEachFeature={onEachFeature} />
        <Section id={props.graphic?.map_id} />
        <ZoomControl position="bottomright" />
      </MapContainer>
    )
  }
}
