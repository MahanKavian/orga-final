import {useState} from "react";

interface Props {
    
}

export default function User({}: Props) {
    const [login, setLogin] = useState("login")
    return (
        <div className="bg-[url('/assets/images/login_wallpaper.jpg')] bg-cover bg-no-repeat absolute top-0 left-0 w-screen h-screen z-10 flex items-center p-4">
            <div className="max-w-[450px] mx-auto flex-grow flex-shrink">
                <div className="grid grid-cols-2 gap-2 bg-white rounded-t-lg">
                    <button type="button" className="col-span-1 block rounded p-2 border-b-[4px] border-b-transparent hover:border-b-primary-100 transition-all duration-200 text-gray-700 font-[500] tracking-[2px]" onClick={()=>{setLogin("login")}}>LOGIN</button>
                    <button type="button" className="col-span-1 block rounded p-2 border-b-[4px] border-b-transparent hover:border-b-primary-100 transition-all duration-200 text-gray-700 font-[500] tracking-[2px]" onClick={()=>{setLogin("register")}}>SIGN UP</button>
                </div>
                <form className="flex flex-col gap-2 bg-[#ffffff30] lg:gap-5 p-5 lg:p-10 rounded-b-lg">
                    {
                        login == "login" &&
                        <>
                            <p className="text-xl font-[500] tracking-[2px] text-white text-center">please Login</p>
                            <div>
                                <label htmlFor="email" className="block w-full text-white">Enter your email</label>
                                <input type="email" name="email" className="block w-full p-2 rounded text-lg focus:outline-0"/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block w-full text-white">Enter your password</label>
                                <input type="password" name="email" className="block w-full p-2 rounded text-lg focus:outline-0"/>
                            </div>
                            <button className="text-lg text-primary-100 cursor-pointer hover:text-yellow" onClick={()=>{setLogin("forgetPass")}}>Forgot password?</button>
                            <button type="submit" className="w-full block rounded p-2 md:mt-6 bg-primary-100 hover:bg-yellow transition-all duration-200 text-white font-[500] tracking-[2px] hover:bg-link">LOGIN</button>
                        </>
                    }
                    {
                        login == "forgetPass" &&
                        <>
                            <p className="text-xl font-[500] text-white tracking-[2px] text-center">Restore Account</p>
                            <div>
                                <label htmlFor="email" className="block w-full text-white">Enter your email or username</label>
                                <input type="text" name="email" className="block w-full p-2 rounded text-lg focus:outline-0"/>
                            </div>
                            <button type="submit" className="block rounded w-full p-2 md:mt-6 bg-primary-100 hover:bg-yellow transition-all duration-200 text-white font-[500] tracking-[2px] hover:bg-link">SEND CODE</button>
                        </>
                    }
                    {
                        login == "register" &&
                        <>
                            <p className="text-xl font-[500] text-white tracking-[2px] text-center">wellcome to us resturant</p>
                            <div className="leading-none">
                                <label htmlFor="usename" className="block w-full text-white">Enter your username</label>
                                <input type="text" name="usename" className="block w-full p-1 md:p-2 text-md md:text-lg rounded focus:outline-0"/>
                            </div>
                            <div className="leading-none">
                                <label htmlFor="email" className="block w-full text-white">Enter your email</label>
                                <input type="email" name="email" className="block w-full p-1 md:p-2 text-md md:text-lg rounded focus:outline-0"/>
                            </div>
                            <div className="leading-none">
                                <label htmlFor="password" className="block w-full text-white">Enter password</label>
                                <input type="password" name="email" className="block w-full p-1 md:p-2 text-md md:text-lg rounded focus:outline-0"/>
                            </div>
                            <div className="leading-none">
                                <label htmlFor="password" className="block w-full text-white">Repeat your password</label>
                                <input type="password" name="email" className="block w-full p-1 md:p-2 text-md md:text-lg rounded text-lg focus:outline-0"/>
                            </div>
                            <div className="h-fit flex items-center">
                                <input type="checkbox" name="checked"/>
                                <label htmlFor="checked" className="text-white p-1">accept all cookies</label>
                            </div>
                            <button type="submit" className="w-full block rounded p-2 md:mt-6 bg-primary-100 hover:bg-yellow transition-all duration-200 text-white font-[500] tracking-[2px] hover:bg-link">SIGN UP</button>
                        </>
                    }
                </form>
            </div>
    </div>
    );
};