import React from "react";
import ComponentC from "./ComponentC";
//create Context 
const UserContext = React.createContext()
//Create a provider 
const UserProvider = UserContext.Provider
//create a consumer 
const UserConsumer = UserContext.Consumer

export{UserProvider, UserConsumer}