import React, { useState } from 'react'
import { useGetTodoQuery,usePostTodosMutation } from '../redux/service/todoapi'
import Card from '../components/Card'
import { useForm } from 'react-hook-form'


const Home = () => {
    const [page,setPage] = useState(1)
    const {register,reset,handleSubmit} = useForm()
    const {data} = useGetTodoQuery(page)
    const [postTodo] = usePostTodosMutation();
    const submit = (data)=>{
        postTodo(data).unwrap().then((res)=>{
            console.log(res);
        })
        reset();
    }
    const buttons =Array(data?.pageSize).fill(null);
    // console.log(import.meta.env.VITE_APP_URL);
  return (
    <div className="flex ">
        <div className='w-[30%] h-[100vh] border bg-cyan-400 flex flex-col justify-center items-center'>
            <form className='border border-white rounded-md shadow-lg p-5 flex flex-col items-center w-[60%] gap-4 ' onSubmit={handleSubmit(submit)} >
                <div>
                    <input className='py-2 px-3 m-2 border outline-none   rounded-md ' placeholder='title' {...register("title",{required:true})} type="text" />
                </div>
                <div>
                    <input className='py-2 px-3 m-2 border outline-none   rounded-md ' placeholder='description' {...register("description",{required:true})} type="text" />
                </div>
                <button type='submit' className='bg-yellow-400 w-[90%] font-bold px-3 py-2 rounded-md ' >Send</button>
            </form>
        </div>
        <div className='w-[70%]  h-[95vh] flex flex-col justify-between'>
            <div className='h-[85vh] p-3 bg-yellow-300 flex flex-col justify-center overflow-y-scroll   border ]'>
                {data?.data?.map((item)=> <Card key={item.id} {...item}/>)}
            </div>
            <div className='flex items-center justify-center gap-3'>
                {buttons.map((_,index) =>{
                    let number = index + 1;
                    return <button onClick={()=>setPage(number)} className={`px-3 py-2 bg-cyan-400 ${number == page ? "bg-yellow-400 text-black" : ""} text-white ` } key={number}>{number}</button>
                })}
            </div>
        </div>
    </div>
  )
}

export default Home
