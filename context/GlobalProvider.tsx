import { getCurrentUser } from "@/lib/appwrite";
import { createContext, useContext, useState, useEffect, Dispatch } from "react";
import { Models } from "react-native-appwrite";

// Initialize the context type
type GlobalContextType = {
    isLoggedIn?: boolean
    setIsLoggedIn?: Dispatch<React.SetStateAction<boolean>>
    user?: Models.Document | null
    setUser?:  Dispatch<React.SetStateAction<Models.Document | null>>
    isLoading?: boolean
}

// declare the _globalContext private variable
const _globalContext: GlobalContextType = {}

// create and use the context
const GlobalContext = createContext<GlobalContextType>(_globalContext)
export const useGlobalContext = () => useContext(GlobalContext)

// End of init. Actual function now
const GlobalProvider = ({ children }: { children: any }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState<Models.Document | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if (res) {
                    setIsLoggedIn(true)
                    setUser(res);
                } else {
                    setIsLoggedIn(false)
                    setUser(null);
                }
            })
            .catch((error) => {
                console.log(error);
                
            })
            .finally(() => {
                setIsLoading(false);
        })
    },[])

    return (
        <GlobalContext.Provider
            
        value= {{
            isLoggedIn,
            setIsLoggedIn,
            user,
            setUser,
            isLoading
        }}
        >
        { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider