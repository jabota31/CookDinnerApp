import getText from './getText';

interface CheckResult {
	name: string,
	email: string,
	pass: string,
	confirmPass: string,
}

function hasSpecialChar(pass: string): boolean {
	let format = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
	return format.test(pass);
}

function emailIsUnique(email: string): boolean {
	//TODO: taken email logic
	return true;
}

export default function (name: string, email: string, pass: string, confirmPass: string): CheckResult {

	let text = getText('registerCheck');
	let result: CheckResult = {
		name: '',
		email: '',
		pass: '',
		confirmPass: '',
	};

	//password checks
	if (pass.length < 8) result.pass = text.shortPassword;
	else if (pass.toLowerCase() === pass || pass.toUpperCase() === pass) result.pass = text.upperAndLower;
	else if (hasSpecialChar(pass)) result.pass = text.specialChars;
	
	//confirm password check
	if (pass !== confirmPass) result.confirmPass = text.dontMatch;

	//email checks
	let [user, domain] = email.split('@');
	if (!email.includes('@') || !domain.includes('.') || user.length <= 0 || domain.startsWith('.') || domain.endsWith('.')) result.email = text.emailInvalid;
	if (!emailIsUnique(email)) result.email = text.emailTaken;
	
	//empty checks
	if (name.length <= 0) result.name = text.fieldRequired;
	if (email.length <= 0) result.email = text.fieldRequired;
	if (pass.length <= 0) result.pass = text.fieldRequired;
	if (confirmPass.length <= 0) result.confirmPass = text.fieldRequired;
	return result;
}