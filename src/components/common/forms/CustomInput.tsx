import { useId, useState } from "react";
import {FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { IconBox } from "..";

interface Props {

}


interface Props extends React.HTMLAttributes<HTMLInputElement>{
    type?: "text" | "number" | "email" | "password" | "tel",
    label?: string,
    register: UseFormRegisterReturn,
    errors: FieldErrors<any>,
    invalid?: boolean,
    parentClassName?: string
}

export function CustomInput({type = "text", label, register, errors, invalid, parentClassName = "", ...rest}: Props) {
    const id = useId()
    let hasError = false
    const [showPass, setShowPass] = useState(false)

    if(errors && errors[register.name]){
        hasError = true
    }
    return (
        <div className={parentClassName}>
            {label && <label htmlFor={id}>{label}</label>}
            <div className={`flex justify-between items-center bg-silver-100 py-2 px-4 placeholder:text-sm placeholder:font-medium outline-none w-full border ${hasError || invalid ? "border-red" : "border-transparent"} `}>
                <input {...rest} id={id} type={type == "password" && showPass ? "text" : type == "password" && !showPass ? "password" : type} className={` w-full outline-0 bg-transparent`} {...register}/>
                {type == "password" && <IconBox icon={"icon-eye"} size={18} functionHandler={() => setShowPass((prevState) => !prevState)}/>}
            </div>
            <span className={"text-sm text-red"}>{errors && errors[register.name] && errors[register.name]?.message as string}</span>
        </div>
    )
}