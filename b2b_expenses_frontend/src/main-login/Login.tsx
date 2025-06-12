import {type FormEvent, useState} from 'react';
import './Login.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {fetchProfile} from '../store/fetchUserProfile';

function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const saveForm = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        const {name, value} = e.target;

        setForm((form) => ({
            ...form,
            [name]: value,
        }));
    };

    const sendData = async (e: FormEvent) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            alert('Пожалуйста, заполните все поля');
            return;
        }
        try {
            const response = await axios.post(
                'http://localhost:4000/auth/login',
                form
            );
            const data = response.data;
            console.log(data);
            await fetchProfile();
            navigate('/main/panel');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <main className="main center">
            <form onSubmit={sendData} className="login-form">
                <div className="form__inner fix-form">
                    <ul className="form__items-list">
                        <li className="h2 h2-padding form__span-center">
                            <span>Войдите в свой аккаунт</span>
                        </li>

                        <li className="form__inner-input">
                            <label htmlFor="email" className="h3 start">
                                Почта
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="form__field h5"
                                onChange={saveForm}
                                placeholder="Введите свою почту"
                                value={form.email}
                                required
                            />
                        </li>

                        <li className="form__inner-input">
                            <label htmlFor="password" className="h3 start">
                                Пароль
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                className="form__field h5"
                                onChange={saveForm}
                                placeholder="Введите свой пароль"
                                minLength={8}
                                value={form.password}
                                required
                            />
                        </li>
                    </ul>
                    <div className="center">
                        <button className="send-btn">Отправить</button>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Login;
