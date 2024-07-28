import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {User} from "@/types/api/Register";

interface Props {
    children: ReactNode;
}

interface AuthContextInterface {
    isLogin: boolean;
    login: (jwt: string, user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextInterface>({isLogin: false, login: () => {}, logout: () => {}})

export const useUser = () => useContext(AuthContext);

export function AuthContextProvider({children}: Props) {
    const [isLogin, setIsLogin] = useState<boolean>(false);

    useEffect(() => {
        if(window.localStorage.getItem("token")) {
            setIsLogin(true)
        }
    }, []);

    const loginHandler = (jwt: string, user: User) => {
        window.localStorage.setItem("token", jwt);
        window.localStorage.setItem("user", JSON.stringify(user));
        setIsLogin(true);
    }

    const logoutHandler = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        setIsLogin(false);
    }

    return (
        <AuthContext.Provider value={{isLogin: isLogin, login: loginHandler, logout: logoutHandler}}>
            {children}
        </AuthContext.Provider>
    );
}