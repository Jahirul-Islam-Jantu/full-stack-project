import toast from "react-hot-toast";

class FormHelper {
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
            reader.onerror = (error) => {
                reject(error);
            }

        })
    }

    SuccessMessage(message){
        toast.success(message)
    }
    ErrorMessage(message){
        toast.error(message)
    }

    IsEmpty(value){
        return value.length === 0;
    }
}

export const { getBase64, SuccessMessage, ErrorMessage, IsEmpty } = new FormHelper();