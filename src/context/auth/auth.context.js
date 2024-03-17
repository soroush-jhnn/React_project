import { getItem } from "localforage";
import React, { useReducer } from "react";
import { useContext } from "react";

export const AuthContext = React.createContext();

export const AUTH_LOGIN_USER =   'AUTH_LOGIN_USER'
export const AUTH_LOGOUT_USER =   'AUTH_LOGOUT_USER'

const authReducer = (state, action) => {
   switch(action.type){
      case AUTH_LOGIN_USER:
         return action.payload
      case AUTH_LOGOUT_USER :
         return {
            user:null,
            token:null
         }
      default:
         return state;
   }
};


export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, {
      user: getItem("user"),
      token: getItem("token"),
  });

  return (
     <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth=()=>{
   const context = useContext(AuthContext);

   if (context === undefined) {
     throw new Error("useLoggined must be used within a AuthContext");
   }
   return context
}

export const useLoggined = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useLoggined must be used within a AuthContext");
  }

  return !!context[0]?.token;
};
