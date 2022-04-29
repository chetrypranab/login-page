import React, { useState } from "react";
import Logic from "./Logic";
import '../App.css';

export default function Validation() {
	
	const [formValid, setFormvalid] = useState({
		username: "",
		password: "",
	});

	const [errormsg, setErrorMsg] = useState("");

	const handleChange = (e: any) => {
		setFormvalid({ ...formValid, [e.target.name]: e.target.value });
	};

	function handleSubmit(e: any) {
		e.preventDefault();

		let message = Logic({
			name: formValid.username,
			pass: formValid.password,
		});

		setErrorMsg(message);
	}

	return (
		<div>
			<h1>Sign In Form</h1>	<br /><br />
			<form onSubmit={handleSubmit} >
				<label htmlFor="username"></label>
				<br />
				<input type="text" name="username" onChange={handleChange} placeholder="enter username" />
				<br />
				<label htmlFor="password" className="input"></label> <br />
				<input type="password" name="password" onChange={handleChange} placeholder="enter password" />
				<br />
				<button name="submit" className="Button Button1">Submit</button>
			</form>
			<label>
				<p style={{ fontWeight: "bold", textAlign: "center", color: "red" }}>
					Result : {errormsg}
				</p>
			</label>
		</div>
	);
}

