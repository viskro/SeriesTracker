export interface SignInFormData {
	email: string;
	password: string;
	rememberMe: boolean;
}

export interface SignUpFormData {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	acceptTerms: boolean;
}

export interface AuthError {
	message: string;
}
