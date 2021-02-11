import React from 'react';
import { Link } from 'react-router-dom'

const Authorization = () => {
	const [login, setLogin] = React.useState(null);
	const [password, setPassword] = React.useState(null);
	const [clickButton, setClickButton] = React.useState(true);

	const changeLogin = (event) => {
		const value = event.currentTarget.value;
		setLogin(value)
	}
	const changePassword = (event) => {
		const value = event.currentTarget.value;
		setPassword(value)
	}

	return (
		<div className="form">
			<h1>Вход</h1>
			<div className="input-form">
				<input type="text" placeholder="Логин" value={login} onChange={changeLogin} />
			</div>
			<div className="input-form">
				<input type="password" placeholder="Пароль" value={password} onChange={changePassword} />
			</div>
			<div className="input-form-link">
				<Link to=
					{login === 'root' &&
					 password === '1' &&
					 clickButton === true ? '/app' : '/'}><button className="input-form-link__button" onClick={() => setClickButton(true)}>Войти</button></Link>
			</div>
			<a href="#" className="forget" onClick={() => alert('Логин: root; Пароль: 1')}>Не знаете данных для входа?</a>
		</div>
	)
}

export default Authorization

