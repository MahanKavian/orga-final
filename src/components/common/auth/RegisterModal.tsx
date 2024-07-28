import {Input, Modal} from "@/components";
import {createPortal} from "react-dom";
import {useModal} from "@/store/ModalContext";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {registerApiCall} from "@/api/Auth";
import {toast} from "react-toastify";
import {useUser} from "@/store/AuthContext";
import {AuthResponseType} from "@/types/api/Register";

interface Props {
    onCloseModal: Function;
}

interface FormData {
    email: string;
    password: string;
    username: string;
}

const initialFormValues: FormData = {
    email: "",
    password: "",
    username: ""
}

export function RegisterModal({onCloseModal}: Props) {
    const {login} = useUser();
    const {openModalHandler, closeModalHandler} = useModal();
    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: "onTouched",
        defaultValues: initialFormValues
    });
    const mutation = useMutation({mutationFn: registerApiCall});

    const onSubmit = (data: FormData) => {
        mutation.mutate(data, {
            onSuccess: async (res: AuthResponseType) => {
                if(res) {
                    login(res.jwt, res.user);
                    toast.success("You have successfully register");
                }
                closeModalHandler();
            }
        })
        reset();
    }

    return createPortal(
        <Modal title={"Register"} closeModal={onCloseModal} >
            <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col w-full sm:w-5/6 mx-auto gap-4"}>
                <Input
                    register={register("username", {required: "enter your username", minLength: {value: 3, message: "Username must contain at least three letters"}})}
                    type={"text"}
                    placeholder={"Jon Doe"}
                    label={"Username"}
                    errors={errors}
                />

                <Input
                    register={register("email", {required: "enter your email", pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address"}})}
                    type={"email"}
                    placeholder={"Jon@email.com"}
                    label={"Email"}
                    errors={errors}
                />

                <Input
                    register={register("password", {required: "enter your password", pattern: {value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&*@#$]).{8,}$/, message: "Password must include at least one uppercase letter, one number, and one character (&*@#$), and be at least 8 characters long"}})}
                    type={"password"}
                    label={"Password"}
                    errors={errors}
                />

                <div className={"w-full flex justify-center items-center"}>
                    <button type={"submit"} className={"bg-primary-100 text-sm rounded py-2 px-8 transition hover:brightness-90 text-white my-2"}>
                        Register
                    </button>
                </div>
                <span className={"text-sm text-silver-400"}>Do you have an account? <span className={"text-blue-300 underline hover:cursor-pointer hover:brightness-70 transition"} onClick={() => {openModalHandler("login")}}>Login</span></span>
            </form>
        </Modal>,
        document.getElementById("portal")!
    );
}