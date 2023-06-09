"use client"  
import {useAppDispatch, useAppSelector  } from "@/redux/hooks"; 

import { increment, decrement  } from "@/redux/features/counterSlice";
import { useGetUsersQuery, useGetUsersByIdQuery } from '@/redux/services/userApi'

const HomePage = () => {

  const count = useAppSelector(state => state.counterReducer.counter)   

  // vamos a usar el useGetUsersQuery    // que ya esta en el estado
  // me puede dar los datos, un error, si esta cargando, y si esta haciendo la solicitud
  const { data, error, isLoading, isFetching } = useGetUsersQuery(null)    // me solicita un argumento pero como no tengo uno para pasarle

  //aplicando unas condicionales 
  if(isLoading || isFetching ) return <p>Loading...</p>
  if(error) return <p>Some error</p>

  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>total: { count } </h1>

      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        Increment
      </button>
      <br />
        <button
          onClick={() => {
            dispatch(decrement())
          }}
        >
        Decrement
      </button>


      {/* recorremos las data */}

      {
        data?.map( user => (     // el error puede ser que el arreglo este vacio o indefinido  ? si existe recorrelo
          <div>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))
      }

    </div>
  )
}

export default HomePage