import UserModel from "../model/UsersModel.js";
export const UserRegistrationService= async (req) => {
    try{
        let reqBody = req.body;
        let existingUser = await UserModel.find({email: reqBody.email});
        if (existingUser.length > 0) {
            return {status: "Failed", message: "User already exists"};
        }
        let result = await UserModel.create(reqBody);
        return {status: "Success", data: result , message: "User Successfully Registered"};

    }catch(err){
        return {status: "Error", error: err, message: "User creation failed"};
    }
}