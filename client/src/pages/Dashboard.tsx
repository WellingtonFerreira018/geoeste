import { useParams } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import GetMap from '../hooks/getMap';
import { User } from '../interfaces';
import api from '../services/api';

type DashboardProps = {
  user: User | null;
  edit?: boolean;
}

function Dashboard(props: DashboardProps) {
  let { id } = useParams();
  const info = {
    id,
    user: props.user,
    edit: props.edit
  }

  if( props.edit && (props.user?.patent !== 'a5FB374A934D584AF' && props.user?.patent !== 'aF6A29FB56F7AEEC8' ))
    return (
      <div id="dashboard">
        <h1>
          Você não tem permissão para acessar essa página
        </h1>
      </div>
    )

  return (
    <div id="dashboard">
      <br/>
        <div id="map">
          <GetMap {...info}/>
        </div>    

    </div>
  )
}

export default Dashboard;