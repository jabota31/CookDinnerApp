import i18n from '../i18n';

function hasSpecialChar(pass) {
	const format = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
	return format.test(pass);
}

function emailIsUnique(email) {
	// TODO: taken email logic
	return true;
}

export default function (name, email, pass, confirmPass) {
	const result = {
		name: '',
		email: '',
		pass: '',
		confirmPass: '',
	};

	// password checks
	if (pass.length < 8) result.pass = i18n.t('shortPassword');
	else if (pass.toLowerCase() === pass
		|| pass.toUpperCase() === pass) result.pass = i18n.t('upperAndLower');
	else if (hasSpecialChar(pass)) result.pass = i18n.t('specialChars');

	// confirm password check
	if (pass !== confirmPass) result.confirmPass = i18n.t('dontMatch');

	// email checks
	const [user, domain] = email.split('@');
	if (!email.includes('@') || !domain.includes('.') || user.length <= 0 || domain.startsWith('.')
		|| domain.endsWith('.')) result.email = i18n.t('emailInvalid');
	if (!emailIsUnique(email)) result.email = i18n.t('emailTaken');

	// empty checks
	if (name.length <= 0) result.name = i18n.t('fieldRequired');
	if (email.length <= 0) result.email = i18n.t('fieldRequired');
	if (pass.length <= 0) result.pass = i18n.t('fieldRequired');
	if (confirmPass.length <= 0) result.confirmPass = i18n.t('fieldRequired');
	return result;
}
