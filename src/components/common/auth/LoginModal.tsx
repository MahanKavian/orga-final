import {Input, Modal} from "@/components";
import {createPortal} from "react-dom";
import {useModal} from "@/store/ModalContext";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {useMutation} from "@tanstack/react-query";
import {loginApiCall} from "@/api/Auth";
import {AuthResponseType} from "@/types/api/Register";
import {useUser} from "@/store/AuthContext";

interface Props {
    onCloseModal: Function;
}

interface FormData {
    identifier: string,
    password: string
}

const initialFormValues : FormData = {
    identifier: "",
    password: ""
}

export function LoginModal({onCloseModal}: Props) {
    const {openModalHandler, closeModalHandler} = useModal();
    const {login} = useUser();

    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: "onTouched",
        defaultValues: initialFormValues
    });
    const mutation = useMutation({mutationFn: loginApiCall});

    const onSubmit = (data: FormData) => {
        mutation.mutate(data, {
            onSuccess: async (res: AuthResponseType) => {
                if(res) {
                    login(res.jwt, res.user);
                    toast.success("You have successfully logged in");
                }
                closeModalHandler();
            }
        })
        reset();
    }

    return createPortal(
        <Modal title={"Login"} closeModal={onCloseModal} >
            <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col w-full sm:w-5/6 mx-auto gap-4"}>
                <Input
                    register={register("identifier", {required: "Enter your username", minLength: {value: 3, message: "Username must contain at least three letters"}})}
                    type={"text"}
                    placeholder={"Jon Doe"}
                    label={"Username"}
                    errors={errors}
                />

                <Input
                    register={register("password", {required: "Enter your password"})}
                    type={"password"}
                    label={"Password"}
                    errors={errors}
                />

                <div className={"w-full flex justify-center items-center"}>
                    <button type={"submit"} className={"bg-primary-100 text-sm rounded py-2 px-8 transition hover:brightness-90 text-white my-2"}>
                        Login
                    </button>
                </div>
                <span className={"text-sm text-silver-400"}>Don't have an account? <span className={"text-blue-300 underline hover:cursor-pointer hover:brightness-70 transition"} onClick={() => {openModalHandler("register")}}>Register</span></span>

            </form>
        </Modal>,
        document.getElementById("portal")!
    );
}