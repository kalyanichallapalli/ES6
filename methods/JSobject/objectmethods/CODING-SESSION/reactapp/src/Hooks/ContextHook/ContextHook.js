import React from 'react'
import A from './A'

const UserContext = React.createContext();
const UseProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export{UseProvider,UserConsumer}