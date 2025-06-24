import {createSlice} from "@redux/toolkit"

const initialState={
    user:null,
    isVerified:false,
    loading:false,
    error:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginRequest:(state,action)=>{
             
        },
        loginSuccess:(state,action)=>{
            
        },
        loginFailure:(state,action)=>{
            
        },
        logout:(state,action)=>{
            
        }
    }
});

export const {loginRequest,loginSuccess,loginFailure,logout} = authSlice.actions;
export default authSlice.reducer;

