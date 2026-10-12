import { createSlice } from "@reduxjs/toolkit";


interface initialState {
    name : string,
    description : string,
    priority : string,
    status : string,
}


const initialState = {
    name : "",
    description : "",
    priority : "Medium",
    status : "pending",
   
}



 const taskslice = createSlice({
    name: "tasks",
     initialState,
    reducers: {},
});

export default taskslice.reducer;