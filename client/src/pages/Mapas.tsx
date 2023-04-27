import { useFetch } from '../hooks/useFetching';
import { Map } from '../types/types';
import { Ul } from '../components/Loading/style'

export const Mapas = () => {
  const { data: maps, isFetching } = useFetch<Map[]>('api/Data/mapas')

  return (
    <div>
      <h2>Mapas</h2>
      <Ul>
        <ul>
          {isFetching && <img src={require('../assets/utils/loading.gif')} alt="loading..." className='center' />}
          {maps?.map(repo => {
            if (repo.map_ctg !== 'Uso') {
              return (
              <li key={repo.map_id}>
                <a href={"/mapas/" + repo.map_id}> {repo.map_desc}</a>
                <p>tets</p>
              </li>
              )
            } else {
              return (
                <li key={repo.map_id}>
                  <a href={"/mapas/uso/" + repo.map_id}> {repo.map_desc}</a>
                </li>
              )
            }
          })}
        </ul>
      </Ul>
    </div>
  )
}
