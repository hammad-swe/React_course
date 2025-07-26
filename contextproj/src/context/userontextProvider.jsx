import React from "react";
import { UserContextProvider } from "./userContextProvider";

const ContextProvider = ({ children }) => {
  const [User , setUser] = React.useState(null);
    return(
            <UserContext.Provider value={{ User, setUser }}>
                {children}
            </UserContext.Provider>
    )
}

export default ContextProvider;