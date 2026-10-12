

import { createSlice } from "@reduxjs/toolkit";


interface initialState {

    priority : string,
  
}


const initialState = {

    priority : "Medium",
   
   
}



 const filterslice = createSlice({
    name: "filters",
     initialState,
    reducers: {},
});

export default filterslice.reducer;