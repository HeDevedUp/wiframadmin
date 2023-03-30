import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";

import {
retrieveUserDetails,
storeUserDetails,
} from "../../../utils/helperFunctions/userDataHandlers";

const initialState = {
  userData: {},
validationData: "",
loading: false,
isLoggedIn: false,
message: "",
error: "",
isUserValidated: false,
registrationStatus: false,
};

const AuthenticationSlice = createSlice({
name: "Authentication",
initialState,
reducers: {

  removeError: (state,action) => {
    state.error = "" ;
      },

loginRequested: (state, action) => {
state.loading = true;
},

loginReceived: (state, action) => {
  console.log("Payload received:", action.payload);
  state.loading = false;
  state.isLoggedIn = true;
  storeUserDetails(JSON.stringify(action.payload));
  state.userData = action.payload.data.user;
  localStorage.setItem("userDetails", JSON.stringify(action.payload));
},

loginRequestFailed: (state, action) => {
  state.loading = false;
  state.error = action.payload.message;
},
logUserOut: (state) => {
  state.loading = false;
  state.isLoggedIn = false;
  state.userData = "";
},


registrationRequested: (state, action) => {
  state.loading = true;
  state.registrationStatus =false;
},
registrationReceived: (state, action) => {
  state.loading = false;
  state.registrationStatus = true;
},
registrationRequestFailed: (state, action) => {
  state.loading = false;
  state.error = action.payload.message;
  // console.log(action.payload.message)
  state.registrationStatus =false;
},
},
});

const {
removeError,
loginRequested,
loginReceived,
loginRequestFailed,
logUserOut,
registrationRequested,
registrationReceived,
registrationRequestFailed,
} = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;



export const logout = () => (dispatch, getState) => {
dispatch(logUserOut());
};

export const RemoveError = () => (dispatch, getState) => {
  dispatch(removeError());
  };

export const checkLogin = () => async (dispatch) => {
const userDetails = await retrieveUserDetails();
if (userDetails) {
dispatch(loginReceived(JSON.parse(userDetails)));
}
};

export const getUserDetails = () => async (dispatch) => {
const userDetails = await retrieveUserDetails();
return userDetails;
};

export const login = (loginDetails) => (dispatch) => {
    console.log("loginDetails", loginDetails);
    dispatch(
      apiCallBegan({
        url: 'auth/login/',
        method: "post",
        data: loginDetails,
        onStart: loginRequested.type,
        onSuccess: loginReceived.type,
        onError: loginRequestFailed.type,
      })
    );
  };



export const RegisterAdminUser =
(values) => (dispatch) => {
  console.log(' registration data',values )
dispatch(
apiCallBegan({
  url: "api/admin/registerAdmin/",
method: "post",
data: values,
onStart: registrationRequested.type,
onSuccess: registrationReceived.type,
onError: registrationRequestFailed.type,
})
);
};





