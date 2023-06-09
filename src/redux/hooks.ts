// para no estar exportando modulos extra configuramos estas dos funciones

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";    //importamos el store

// para que el resto de componentes exporten en features
// useDispatch()     le tengo que decir que tipo de datos hay  en esta posible funcion
// eso lo tenemos definido en el AppDispatch que viene desde el store 
// counterReducer: { counter: number; };     // el counter reducer puede utilizar
// esto es para cuando quiero utilizar caracteristicas usa el useAppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()


// le colocamos  un tipo de dato que viene desde react-redux que se llama TypedUseSelectorHook
// el TypedUseSelectorHook va a estar basado en el RootState
// useSelector              al final va a ser lo que viene desde el useSelector que es de react-redux
// cuando quieras un selector del estado un dato puedes user el use selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 


