import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetching';
import { Category } from '../types/types';
import { NotFound } from '../components/NotFound/NotFound';
import {Element} from '../components/Element/Element';
import { Ul } from '../components/Loading/style';

export default function ByCategory() {
  const { id } = useParams();
  const url = '/api/Data/categorias/' + String(id);
  const { data: subs, isFetching, err } = useFetch<Category>(url);


  if(!err){

    return (
      <Ul>
      <div>
        {!isFetching && <h2> Dados {subs?.ctg_desc}</h2>}
        {isFetching && <img src={require('../assets/utils/loading.gif')} alt="loading..." className='center'/>}
        {<Element ctgs={subs}/>}
      </div>
      </Ul>
    )
  }else{
    return <NotFound/>
  }

}
