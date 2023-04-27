import React, { useState, useEffect, useRef } from "react";
import api from "../services/api";
import { Loading } from "../components/Loading/Loading";
import { NotFound } from "../components/NotFound/NotFound";
import Download from "../components/Button/DownloadFile";
import { useFetch } from "./useFetching";
import { Map } from "../types";
import { StaticMaps } from "../pages/StaticMaps";
import { Graphic } from "../components/Graphic/Graphic";
import { UserProps } from "../interfaces";



function GetMap(args: UserProps) {

  const { data: map } = useFetch<Map>('/api/Data/mapas/' + args.id);
  const url = '/api/Data/mapas/resource/' + args.id;

  const parameters = {
    id: args.id,
    token: args?.user?.token,
    pos: '15',
    lef: '47'
  }

  if (map?.static === true) {
    parameters.pos = '25';
    parameters.lef = '8';
    return (
      <div>
        <h2>{map?.map_desc}</h2>
        <StaticMaps info={map?.map_id} />
        <Download {...parameters} />
        <div>
          <br></br>
        </div>
      </div>

    )
  } else {

    const Data: React.FC = () => {
      const [data, setData] = useState();
      const [loading, setLoading] = useState(false);
      const [err, setErr] = useState(false);
      const componentMounted = useRef(true);

      useEffect(() => {
        const getData = async () => {
          try {
            setLoading(true);
            const res = await api.get(url);
            if (componentMounted.current) {
              let json = res.data
              setData(json);
              setLoading(false);
            }
          } catch (Err) {
            setErr(true);
          }
        };
        getData();
        return () => {
          componentMounted.current = false;
        }
      }, []);

      if (err) {
        if (loading) setLoading(false);
        return <NotFound />;
      }

      if (data) {
        return (
          <div>
            <h2>{map?.map_desc}</h2>

            <Graphic data={data} graphic={map} downloadProps={parameters} edit={args.edit} />
          </div>
        );
      } else {
        return (
          <Loading />
        )
      }
    };
    return (
      <Data />
    );
  }
}
export default GetMap
