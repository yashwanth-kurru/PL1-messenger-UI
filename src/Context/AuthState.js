import React, { useReducer } from "react";
import api from "../API/api";
import {Login} from "../API/service"
import authContext from "./authContext";

const AuthState = (props) => {


    const initialLoginState = {
      isAuthenticated: false,
      isLoading: true,
      userToken: null,
    };
  
    const loginReducer = (prevState, action) => {
      switch (action.type) {
        case 'RETRIEVE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOGIN':
          return {
            ...prevState,
            isAuthenticated: true,
            userName: action.id,
            userToken: action.token,
            isLoading: false,
            newUser: action.newUser
          };
        case 'LOGOUT':
          return {
            ...prevState,
            userName: null,
            userToken: null,
            isLoading: false,
          };
        case 'REGISTER':
          return {
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading: false,
          };
      }
    };
  
    const [state, dispatch] = useReducer(loginReducer, initialLoginState);
  
    // GET TOKEN
    const loadUser = async () => {
      if (localStorage.getItem("token")) {
        dispatch({
          type: 'LOGIN',
        });
      }
    };
  
    // Login user
    const loginUser = async (formData) => {
      const res = await Login(formData);
      console.log(res);
      if(res.data.length == 0){
          console.log("Login Failed!, email Not found")
          return false;
      }

      localStorage.setItem('payLoad', JSON.stringify(res.data));
      return true;
    //   dispatch({
    //     type: 'LOGIN',
    //     token: res.data.token,
    //   });
    //   console.log(state);
    };
  
    // Logout
    const logout = () => {
      dispatch({
        type: "Auth_Error",
      });
    };
  
    return (
      <authContext.Provider
        value={{
          isAuthenticated: state.isAuthenticated,
          payLoad: state.userToken,
          loginUser,
          loadUser,
          logout,
        }}
      >
        {props.children}
      </authContext.Provider>
    );
  };
  export default AuthState;