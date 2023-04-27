import { useParams } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import GetMap from '../hooks/getMap';
import { User } from '../interfaces';

function Dashboard(user : User | null) {
  let { id } = useParams();
  const edit = true;
  const info = {
    id,
    user,
    edit
  }
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