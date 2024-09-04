import { useState } from "react";
import userDataContext from "./CreateContext";

function ContextProvider({children}) {
    const [user,setUser] = useState(null);
    const [cart,setCart] = useState([]);
    return ( 
        <div>
            <userDataContext.Provider value={{user,setUser,cart,setCart}}>
                {children}
            </userDataContext.Provider>
        </div>
     );
}

export default ContextProvider;