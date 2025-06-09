import { useState, type FormEvent } from 'react';
import './Login.css';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const saveForm = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const sendData = (e: FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    console.log(form);
  };

  return (
    <main className="container center">
      <form onSubmit={sendData}>
        <div className="form fix-form">
          <ul className="items-list">
            <li className="h2 h2-padding text-center">
              <span>Войдите в свой аккаунт</span>
            </li>

            <li className="form-input">
              <label htmlFor="email" className="h3 start">
                Почта
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="field h5"
                onChange={saveForm}
                placeholder="Введите свою почту"
                value={form.email}
                required
              />
            </li>

            <li className="form-input">
              <label htmlFor="password" className="h3 start">
                Пароль
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="field h5"
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
