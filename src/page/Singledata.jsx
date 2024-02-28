import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleDataQuery } from '../redux/service/todoapi';

import Spinnerof from '../components/Spinnerof';



const Singledata = () => {
    const {id} = useParams();
    const { data, isLoading } = useGetSingleDataQuery(id);

    
  return (
    <div>
      {isLoading ? <Spinnerof/> : <div><h2 className='text-yellow-500 h-[100vh] bg-black text-4xl font-bold p-5'>{data?.title}</h2></div>}
    </div>
  )
}

export default Singledata
