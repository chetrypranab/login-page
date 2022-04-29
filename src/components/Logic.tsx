export interface validate {
	name: string;
	pass: string;
}
export interface errortxt {
	errtxt: string
}
export default function Logic({ name, pass }: validate) {

	let message: string = " ";

	function hasLowerCase(str: string) {
		for (let x = 0; x < str.length; x++)
			if (str.charAt(x) >= 'a' && str.charAt(x) <= 'z')  			//check for lowercase
				return true;
		return false;
	}

	function hasUpperCase(str: string) {
		for (let x = 0; x < str.length; x++)
			if (str.charAt(x) >= 'A' && str.charAt(x) <= 'Z')  			//check for uppercase
				return true;
		return false;
	}

	const requiredLength = {
		usermin: 3,
		usermax: 10,
		pwmin: 8,
		pwmax: 16,
	};

	let cond2 = /\d/;                                      			// number check 
	let cond3 = /[!@#$%\^&*)(+=_]/;                       			//special character check

	let hasSpecialChar: boolean = pass.match(cond3) ? true : false;
	console.log(hasSpecialChar);

	let hasNumber: boolean = pass.match(cond2) ? true : false;
	console.log(hasNumber);

	let userSpecial: boolean = name.match(cond3) ? true : false;
	console.log(userSpecial);

	let hasLowerCaps = hasLowerCase(pass);
	let hasUpperCaps = hasUpperCase(pass);

	if (name === "" && pass === "") {
		message = "fields cannot be empty";
		return message;
	}

	if (name === "") {
		message = "username is required";
		return message;
	}

	if (userSpecial === true) {
		message = "Username should have no special characters";
		return message;
	}

	if (pass === "") {
		message = "password is required field";
		return message;
	}

	if (name.length > requiredLength.usermax) {
		message = "Maximum characters for username is 10";
		return message;
	}

	if (name.length < requiredLength.usermin) {
		message = "Minimum Character for username is 3";
		return message;
	}

	if (pass.length < requiredLength.pwmin) {
		message = "Minimum Character for password is 8";
		return message;
	}

	if (pass.length > requiredLength.pwmax) {
		message = "Maximum Character for password is 16";
		return message;
	}

	if (!hasSpecialChar) {
		message = "password should have one special character";
		return message;
	}

	if (!hasNumber) {
		message = "password should have at least one number";
		return message;
	}

	if (!hasLowerCaps) {
		message = "password should have lower case letters";
		return message;
	}

	if (!hasUpperCaps) {
		message = "password should have upper case letters";
		return message;
	}

	else {
		message = `Username: ${name} | Password: ${pass}`;
		return message;
	}

}

















