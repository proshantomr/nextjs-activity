"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from "next/link";
import { redirect } from 'next/navigation';
import { z, ZodFormattedError } from 'zod';
import {Axiosinstance} from "@/app/lib/axios/AxiosInterceptor";

// check if an email is unique
const uniqueEmailCheck = async (email: string): Promise<boolean> => {
    // Replace with your actual logic to check if the email is unique
    return email !== "existing@example.com";
};

// Zod schema with asynchronous email check
const regSchema = z.object({
    name: z.string(),
    email: z.string().email().refine(async (email) => {
        const isUnique = await uniqueEmailCheck(email);
        if (!isUnique) {
            throw new Error("Your email already exists. Please use an unique email");
        }
        return true;
    }),
    password: z.string().min(6),
    confirm_password: z.string().min(6)
}).refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"]
});
// console.log(regSchema)

// registration data
type RegisterData = {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
};

const Register: React.FC = () => {
    const [registerData, setRegisterData] = useState<RegisterData>({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    });
    // console.log(Register)


    const [passwordError, setPasswordError] = useState<string>("");
    const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof RegisterData, ZodFormattedError<string>>>>({});
    const [regComplete, setRegComplete] = useState<boolean>(false);

    const registerHandler = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const result = await regSchema.safeParseAsync(registerData);

            if (!result.success) {
                const formattedErrors = result.error.format();
                setValidationErrors(formattedErrors);
                return;
            }


            setValidationErrors({});
            setRegComplete(true);

            const response = await Axiosinstance.post("http://localhost:3000/api/register", result)
            console.log(response)
        } catch (error) {
            // console.error("Validation failed:", error);
        }
    };

    if (regComplete) {
        redirect('/auth/login');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    };

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
                        onChange={handleChange}
                        className="input input-bordered input-info w-full my-2"
                    />
                    {validationErrors.name?._errors && (
                        <p className="text-red-500">{validationErrors.name._errors[0]}</p>
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={registerData.email}
                        onChange={handleChange}
                        className="input input-bordered input-info w-full my-2"
                    />
                    {validationErrors.email?._errors && (
                        <p className="text-red-500">{validationErrors.email._errors[0]}</p>
                    )}
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={registerData.password}
                        onChange={handleChange}
                        className="input input-bordered input-info w-full my-2"
                    />
                    {validationErrors.password?._errors && (
                        <p className="text-red-500">{validationErrors.password._errors[0]}</p>
                    )}
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirm_password"
                        value={registerData.confirm_password}
                        onChange={handleChange}
                        className="input input-bordered input-info w-full my-2"
                    />
                    {validationErrors.confirm_password?._errors && (
                        <p className="text-red-500">{validationErrors.confirm_password._errors[0]}</p>
                    )}
                    {passwordError && <p className="text-red-500">{passwordError}</p>}
                </div>
                <button type="submit" className="btn btn-outline btn-info w-80">Register</button>
                <p className="mt-8">If you have an account, please <Link className="text-blue-500" href="/auth/login">Login</Link></p>
            </form>
        </div>
    );
};

export default Register;
