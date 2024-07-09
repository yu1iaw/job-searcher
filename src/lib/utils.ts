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

export const handleStringPattern = (str: string) => {
    return str.match(/\bfront|full|back/i) ? str.replace(/(\B(end|stack)|\W+(end|stack)?)\s?(\w+\s?)?/i, '') : str.trim();
}