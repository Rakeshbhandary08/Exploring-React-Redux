import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

//how to use it
//api : https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20

//how actions will made : {type:"coin/fetch",payload: data}

const FetchData = createAsyncThunk(
  //write the action
  "coin/fetch",
  async (args, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`,
      );
      const data = await response.json();
      return data; //data will go to the payload
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);


//storing the data globally
const slicer4= createSlice({
  name: "slice4",
  initialState: { data: [], loading: false, error: null },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(FetchData.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(FetchData.fulfilled,(state,action)=>{
         state.data=action.payload,
         state.loading=false,
         console.log(state.data)
         console.log(state.data[0].image)
      })
      .addCase(FetchData.rejected,(state,action)=>{
          state.error=action.payload,
          state.loading=false
      });
  },
});

export default slicer4.reducer;
export {FetchData};