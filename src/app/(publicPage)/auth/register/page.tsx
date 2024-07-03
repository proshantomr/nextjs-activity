"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { redirect } from 'next/navigation';
import {z} from 'zod';

// const regSchema = z.object({
//     name        :z.string(),
//     email       :z.string().email().refine(async (email)=>{
//                 const isUnique = await uniqueEmailCheck(email);
//                 },{message:"Your email already exists. Please use unique Email"}),
//     password    :z.string().min(6),
//     confirm_password: z.string().min(6)
//     })

const Register = () => {
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    });
    // console.log(registerData);

    const [passwordError, setPasswordError] = useState("");
    const [regComplete, setRegComplete] = useState(false)
    // console.log("regComplete",regComplete);

    const registerHandler = (e) => {
        e.preventDefault();

        if (registerData.password !== registerData.confirm_password) {
            setPasswordError("Passwords does match");
            return;
        }
        setPasswordError("");
        setRegComplete(true);
        // console.log(registerData);

    };
    if (regComplete) {
        redirect('/auth/login');
    }

    // console.log(regComplete);

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form onSubmit={registerHandler} className="text-center">
                <h1 className="mb-4 font-bold text-2xl">Register Form</h1>
                <div className="w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                        className="input input-bordered input-info w-full my-2"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                        className="input input-bordered input-info w-full my-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                        className="input input-bordered input-info w-full my-2"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirm_password"
                        value={registerData.confirm_password}
                        onChange={(e) => setRegisterData({...registerData, confirm_password: e.target.value})}
                        className="input input-bordered input-info w-full my-2"
                    />
                    {passwordError && <p className="text-red-500">{passwordError}</p>}
                </div>
                <button type="submit" className="btn btn-outline btn-info w-80">Register</button>
                {/*<p className="my-5">If you have an account, please <a href="#" className= "text-blue-500 cursor-pointer">Login</a></p>*/}
                <p className="mt-8">If you have an account, please <Link className="text-blue-500" href="/auth/login">Login</Link></p>
            </form>
        </div>
    );
};

export default Register;
