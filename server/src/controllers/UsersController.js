import {UserLogInService, UserRegistrationService} from "../services/UserService.js";

// Registration Service
export const userRegistration = async (req, res) => {
    let result = await UserRegistrationService(req);
    return res.json(result);
}

// LogIn service
export const userLogIn = async (req, res) => {
    let result = await UserLogInService(req, res);
    return res.json(result);
}