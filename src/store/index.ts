import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'
import filtlroReducer from './reducers/filtro'

const store = configureStore({
  reducer: { tarefas: tarefasReducer, filtro: filtlroReducer }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
