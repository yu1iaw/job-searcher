import toast from "react-hot-toast";

export const handleError = (error: unknown) => {
    let message;
    if (error instanceof Error) {
        message = error.message;
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Some error occurred."
    }

    toast.error(message)
}