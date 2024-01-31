import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  keywords: ''
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createData: (state, action) => {
      state.data = [...state.data, action.payload]
    },
    sortingData: (state, action) => {
      state.data = [...state.data.sort((a,b) => action.payload == 'asc' ? a.price - b.price : action.payload == 'desc' ? b.price - a.price : null )]
    },
    deleteData: (state,action) => {
      state.data = [...state.data.filter((i) => i.id != action.payload)]
    },
    updateData: (state, action) => {
      state.data = [...state.data.map((i) => i.id == action.payload.id ? ({...i, ...action.payload}) : i)]
    },
    searchData: (state, action) => {
      state.keywords = action.payload
    }
  },
})

export const { createData, deleteData, updateData, sortingData, searchData  } = dataSlice.actions

export default dataSlice.reducer