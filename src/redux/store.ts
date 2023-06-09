
import { configureStore } from '@reduxjs/toolkit'  
import counterReducer from './features/counterSlice'    


export const store = configureStore({
    reducer: {      
        counterReducer      
    }
})


// extraemos los typos de datos del store     <typeof store.getState>  
// luego utilizamos un ReturnType               sintaxis del propio typescript
// type RootState                               type de stado raiz que tiene el store    
// se exporta
export type RootState = ReturnType<typeof store.getState>      // eportamos los tipos de datos de tiene en el statdo 


// quiero exportar las funciones que quiero ejecutar
// typo de dato que tiene el store en el su propiedad distpach
// luego se exporta 
export type AppDispatch = typeof store.dispatch   
// luego a una funcion le estoy diciendo de que funciones puede ejecutar
// muy util para el autocompletado









