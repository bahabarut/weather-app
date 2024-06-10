export interface AuthRequestModel {
    email: string;
    password: string;
    returnSecureToken: boolean;
}
export interface AuthResponseModel {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered: boolean;
}