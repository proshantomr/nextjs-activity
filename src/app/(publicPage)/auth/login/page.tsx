"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { z, ZodFormattedError } from 'zod';
import { Axiosinstance } from "@/app/lib/axios/AxiosInterceptor";
import { setAccessToken } from '@/action/loginauthAction';

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

type LoginData = {
    email: string;
    password: string;
};

const Login: React.FC = () => {
    const router = useRouter();

    const [loginData, setLoginData] = useState<LoginData>({
        email: "",
        password: ""
    });

    const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof LoginData, ZodFormattedError<string>>>>({});

    const loginHandler = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const result = await loginSchema.safeParseAsync(loginData);

            if (!result.success) {
                const showErrors = result.error.format();
                setValidationErrors(showErrors);
                return;
            }

            setValidationErrors({});
            const response = await Axiosinstance.post("/api/login", result.data);
            const { data } = response;

            if (data.status === 200) {
                localStorage.setItem('user', JSON.stringify(data.user));
                await setAccessToken('auth_token', data.token); // Set the access token as a cookie
                router.push('/');
            }
        } catch (error) {
            console.error("Validation failed:", error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form onSubmit={loginHandler} className="text-center">
                <h1 className="mb-4 font-bold text-2xl">Login</h1>
                <div className="w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={loginData.email}
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
                        value={loginData.password}
                        onChange={handleChange}
                        className="input input-bordered input-info w-full my-2"
                    />
                    {validationErrors.password?._errors && (
                        <p className="text-red-500">{validationErrors.password._errors[0]}</p>
                    )}
                </div>
                <button type="submit" className="btn btn-outline btn-info w-80">Login</button>
                <p className="mt-8">Don't have an account? <Link className="text-blue-500" href="/auth/register">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;
