"use client"

import ReuseButton from "@/app/components/ReuseButton";
import Input from "@/app/components/inpute/Inpute";
import Heading from "@/app/components/productsFetcher/Heading";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

    }
    return (
        <>
            <Heading title="Sign up for 2-ABBU" />
            <ReuseButton outline label="sign up for Google" icon={AiOutlineGoogle} onClick={() => { }} />

            <hr className="bg-slate-300 w-full h-px" />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="email"
                label="E-Mail"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="phone"
                label="Phone"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="number"
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
                Already have an account?
                <Link href="/auth/login" className="underline">
                    Log In
                </Link>
            </p>
        </>
    );
}

export default RegisterForm;