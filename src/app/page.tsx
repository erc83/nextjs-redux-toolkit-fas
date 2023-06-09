"use client"  
import {useAppDispatch, useAppSelector  } from "@/redux/hooks"; 


// estas funciones son las qu tengo que utilizar para el increment y el decrement
import { increment, decrement  } from "@/redux/features/counterSlice";

const HomePage = () => {

  const count = useAppSelector(state => state.counterReducer.counter)   
  /* para ejecutarla useAppDispatch */
  // me da una constante disptach = 
  // lo bueno que gracias a los hooks que se han creado
  // el dispatch nos permitira ejecutar funciones que hemos definido antes 
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>total: { count } </h1>
      {/* ahora en el button usaremos una funcion que nos permite incrementar   () => {}   */}
      {/* esta funcion se llama increment */}

      {/* dispatch que quieres ejecutar, le digo que dispare el incremento que importamos de counterSlice */}
      {/* increment() es una funcion se ejecuta   */}
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        Increment
      </button>
      <br />
      {/* aqui el decrement */}
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        Decrement
      </button>
    </div>
  )
}

export default HomePage