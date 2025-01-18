
 // Connection String is from MongoDB Atlas Cluster.
 // JWT Secret string is generated from JWT secret generator . it will use to encode or decode JWT Token.
export const JWT_EXPIRATION_DURATION = 60 * 60 * 24 * 7 * 1000; // It will use to encode or decode JWT Token.

export const Cookie_ExpiresIn = 60 * 60 * 24 * 7 * 1000;
export const corsOptions = {
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true,              // Allow cookies to be sent
};

// export const EMAIL_HOST = "smtp.gmail.com"
// export const EMAIL_PORT = 465
// export const EMAIL_USER = "jahirulislamjantu@gmail.com"
// export const EMAIL_PASSWORD = "gefnoodpvwmzwfgg"

export const URL_ENCODING = true;
export const MAX_JSON_SIZE = "50mb";

export const REQUEST_LIMIT_TIME = 15 * 60 * 1000;
export const REQUEST_LIMIT_NUMBER = 3000;

export const WEB_CACHE = false;
export const PORT = 3000;


