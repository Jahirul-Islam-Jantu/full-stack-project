import {UserRegistrationService} from "../services/UserService.js";
// Registration Service
export const userRegistration = async (req, res) => {
    let result = await UserRegistrationService(req);
    return res.json(result);
}