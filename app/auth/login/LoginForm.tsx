"use client"
import ReuseButton from "@/app/components/ReuseButton";
import Input from "@/app/components/inpute/Inpute";
import Heading from "@/app/components/productsFetcher/Heading";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

    }
    return (
        <>
            <Heading title="Sign In for 2-ABBU" />
            <ReuseButton outline label="Continue with Google" icon={AiOutlineGoogle} onClick={() => { }} />

            <hr className="bg-slate-300 w-full h-px" />
            <Input
                id="email"
                label="E-Mail"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Input
                id="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="password"
            />

            <ReuseButton label={`${isLoading ? "Loading" : "Sign Up"}`} onClick={() => handleSubmit(onSubmit)} />
            <p className="text-sm">
                Don not have an account?
                <Link href="/auth/register" className="underline">
                    Sign up
                </Link>
            </p>
        </>
    );
}

export default LoginForm;