import {useState} from 'react';
import './Register.css';
import axios from 'axios';

function Register() {
    const [form, setForm] = useState({
        email: '',
        password: '',
        displayName: '',
        role: '',
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

    const sendData = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.email || !form.password || !form.displayName || !form.role) {
            alert('Пожалуйста, заполните все поля');
            return;
        }
        try {
            console.log('FormData:', form);
            const res = await axios.post('http://localhost:4000/auth/register', form);
            console.log('Успех:', res.data);
            alert('Регистрация успешна!');
        } catch (err) {
            console.error('Ошибка:', err);
        }
    };

    return (
        <main className="main center">
            <form className="form" onSubmit={sendData}>
                <div className="form__inner">
                    <ul className="form__items-list">
                        <li className="h2 h2-padding form__span-center">
                            <span>Регистрация аккаунта</span>
                        </li>

                        <li className="form__inner-input">
                            <label htmlFor="email" className="h3">
                                Почта
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Введите свою почту"
                                onChange={saveForm}
                                value={form.email}
                                className="form__field h5"
                                required
                            />
                        </li>

                        <li className="form__inner-input">
                            <label htmlFor="password" className="h3">
                                Пароль
                            </label>
                            <input
                                id="password"
                                type="password"
                                minLength={8}
                                name="password"
                                placeholder="Введите свой пароль"
                                onChange={saveForm}
                                value={form.password}
                                className="form__field h5"
                                required
                            />
                        </li>

                        <li className="form__inner-input">
                            <label htmlFor="displayName" className="h3">
                                ФИО
                            </label>
                            <input
                                id="displayName"
                                type="text"
                                name="displayName"
                                placeholder="Иванов Иван Иванович"
                                minLength={5}
                                onChange={saveForm}
                                value={form.displayName}
                                className="form__field h5"
                                required
                            />
                        </li>

                        <li className="form__inner-input">
                            <label htmlFor="role" className="h3">
                                Роль
                            </label>
                            <select
                                name="role"
                                onChange={saveForm}
                                value={form.role}
                                className="role-select h3"
                                required
                            >
                                <option value="">Выберите роль</option>
                                <option value="SUPERVISOR">Руководитель</option>
                                <option value="MANAGER">Менеждер</option>
                                <option value="ASSISTANT">Ассистент</option>
                            </select>
                        </li>

                        <li className="form__checkbox">
                            <label className="form__checkbox-design">
                                <input type="checkbox" name="consent" required/>
                                <span className="consent-text">
                Я даю согласие на обработку персональных данных*
              </span>
                            </label>
                        </li>
                    </ul>

                    <div className="center">
                        <button type="submit" className="send-btn">
                            Отправить
                        </button>
                    </div>

                    <div className="center">
                        <a
                            href="/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="privacy-text"
                        >
                            в соответствии с политикой конфиденциальности
                        </a>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Register;
