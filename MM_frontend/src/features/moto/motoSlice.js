import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    motos: ["Deportivos", "Urbanos", "Motocross", "Clásicos" ]
}

const motoSlice = createSlice({
    name: "moto",
    initialState,
    reducers: {} 
})

export const selectMotos = state=> state.moto.motos;

export default motoSlice.reducer;