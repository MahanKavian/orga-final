import {useState} from "react";

interface Props {
    
}

export default function User({}: Props) {
    const [login, setLogin] = useState("login");

    return (
        <div className="bg-[url('/assets/images/login_wallpaper.jpg')] bg-cover bg-no-repeat absolute top-0 left-0 w-screen h-screen z-[80] flex items-center p-4">
            <div className="max-w-[450px] mx-auto flex-grow flex-shrink">
                <div className="grid grid-cols-2 gap-2 bg-white rounded-t-lg">
                    <button type="button" className={`col-span-1 ${login === "login" ? "border-b-primary-100 text-primary-300" : "border-b-transparent text-silver-300"} block p-2 pt-3 border-b-[4px] border-b-transparent hover:text-primary-300 transition font-normal tracking-[2px]`} onClick={()=>{setLogin("login")}}>LOGIN</button>
                    <button type="button" className={`col-span-1 block ${login === "register" ? "border-b-primary-100 text-primary-300" : "border-b-transparent  text-silver-300"} p-2 pt-3 border-b-[4px] border-b-transparent hover:text-primary-300 transition text-silver-300 font-normal tracking-[2px]`} onClick={()=>{setLogin("register")}}>SIGN UP</button>
                </div>
                <form className="flex flex-col gap-2 bg-[#ffffff30] lg:gap-5 p-5 lg:p-10 rounded-b-lg">
                    {
                        login == "login" &&
                        <>
                            <h1 className="text-3xl font-noraml tracking-[2px] text-white text-center capitalize mb-3">Login</h1>
                            <div className={"flex flex-col gap-2"}>
                                <label htmlFor="userEmail" className="block w-full text-lg text-white capitalize">email</label>
                                <input type="email" id={"userEmail"} name="userEmail" className="block w-full p-2 rounded text-lg focus:outline-none"/>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <label htmlFor="userPass" className="block w-full text-lg text-white capitalize">password</label>
                                <input type="password" id={"userPass"} name="userPass" className="block w-full p-2 rounded text-lg focus:outline-none"/>
                            </div>
                            <div>
                                <button className="text-lg text-primary-300 cursor-pointer hover:text-yellow transition" onClick={()=>{setLogin("forgetPass")}}>Forgot password?</button>
                            </div>
                            <button type="submit" className="w-full block rounded p-2 md:mt-6 bg-primary-100 hover:bg-yellow transition-all duration-200 text-white font-[500] tracking-[2px] hover:bg-link">LOGIN</button>
                        </>
                    }
                    {
                        login == "forgetPass" &&
                        <>
                            <h1 className="text-3xl font-noraml tracking-[2px] text-white text-center capitalize mb-3">Restore Account</h1>
                            <div className={"flex flex-col gap-2"}>
                                <label htmlFor="restoreAcc" className="block w-full text-white">Enter your email or username</label>
                                <input type="text" id={"restoreAcc"} name="restoreAcc" className="block w-full p-2 rounded text-lg focus:outline-none"/>
                            </div>
                            <button type="submit" className="block rounded w-full p-2 md:mt-6 bg-primary-100 hover:bg-yellow transition-all duration-200 text-white font-[500] tracking-[2px] hover:bg-link">SEND CODE</button>
                        </>
                    }
                    {
                        login == "register" &&
                        <>
                            <h1 className="text-3xl font-noraml tracking-[2px] text-white text-center capitalize mb-3">welcome</h1>
                            <div className={"flex flex-col gap-2"}>
                                <label htmlFor="userName" className="block w-full text-lg text-white capitalize">username</label>
                                <input type="text" name="userName" id={"userName"} className="block w-full p-2 rounded text-lg focus:outline-none"/>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <label htmlFor="userRegEmail" className="block w-full text-lg text-white capitalize">email</label>
                                <input type="email" name="userRegEmail" id={"userRegEmail"} className="block w-full p-2 rounded text-lg focus:outline-none"/>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <label htmlFor="userRegPass" className="block w-full text-lg text-white capitalize">password</label>
                                <input type="password" name="userRegPass" id={"userRegPass"} className="block w-full p-2 rounded text-lg focus:outline-none"/>
                            </div>
                            <div className="h-fit flex gap-1 items-center">
                                <input type="checkbox" name="rules" id={"rules"}/>
                                <label htmlFor="rules" className="text-white p-1 hover:cursor-pointer">I have read and accept all the rules</label>
                            </div>
                            <button type="submit" className="w-full block rounded p-2 md:mt-6 bg-primary-100 hover:bg-yellow transition-all duration-200 text-white font-[500] tracking-[2px] hover:bg-link">SIGN UP</button>
                        </>
                    }
                </form>
            </div>
    </div>
    );
};