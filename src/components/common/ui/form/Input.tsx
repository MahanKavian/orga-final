import {FieldErrors, UseFormRegisterReturn} from "react-hook-form";
import {useId} from "react";
import {ErrorMessage} from "@/components/common/ui/form/ErrorMessage";

interface Props {
    label?: string;
    type?: "text" | "password" | "email" | "tel" | "number";
    placeholder?: string;
    register: UseFormRegisterReturn<any>;
    errors: FieldErrors<any>;
}

export function Input({label, type = "text", placeholder = "", register, errors}: Props) {
    const id: string = useId();
    const name = register.name;
    let hasErr = false;
    if(errors && errors[name]) {
        hasErr = true;
    }

    return (
        <div className={"w-full flex flex-col gap-1"}>
            {label && <label htmlFor={id} className={"text-silver-300 text-sm"}>{label}</label>}
            <input
                id={id}
                placeholder={placeholder}
                className={`w-full shadow rounded py-1 px-3 focus:outline-none border ${hasErr ? "border-red" : "border-primary-100"} text-sm`}
                {...register}
                type={type}
            />
            <ErrorMessage errors={errors} name={register.name}/>
            {/*{errors.username && <div className={"text-sm text-red"}>{errors.username.message}</div>}*/}
        </div>
    );
}