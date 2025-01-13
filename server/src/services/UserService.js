import UserModel from "../model/UsersModel.js";
export const UserRegistrationService= async (req) => {
    try{
        let reqBody = req.body;
        let result = await UserModel.create(reqBody);
        if(result){
            return {status:"Success", result:result};
        }else {
            return {status:"Error creating user registration" };
        }
    }catch(err){
        return {status: "Error", error: err};
    }
}