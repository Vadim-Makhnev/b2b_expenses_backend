import {useState} from 'react'
import './Register.css'
import axios from 'axios'

function Register() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        displayName: "",
        role: ""
    })


    const saveForm = (e:  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target
        setForm(form => ({
            ...form, 
            [name]: value
        }))
    }

    const sendData = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!form.email || !form.password || !form.displayName || !form.role) {
            alert('Пожалуйста, заполните все поля');
            return;
    }
        try{
            console.log('FormData:', form);
            const response = await axios.post("http://localhost:4000/auth/register", form)
            console.log('Успех:', response.data);
            alert('Регистрация успешна!');
        }catch(err){
            console.error('Ошибка:', err);
            alert(`${err.response.data.message}`);
        }
        
    }

    return (
       <main>
            <div className="main container center">
                <form className="register-form" onSubmit={sendData}>
                    <ul className='items-list'>
                        <li className='h2 h2-padding'>Регистрация аккаунта</li>


                        <li className='form-input'>
                            <label htmlFor="email" className='start h3'>
                                Почта
                            </label>
                            <input id="email" type="email" name='email' onChange={saveForm} value={form.email}  required/>
                        </li>


                        <li className='form-input'>
                            <label htmlFor="password" className='start h3'>
                                Пароль
                            </label>
                            <input id="password"  type="password" minLength={8} name='password' onChange={saveForm} value={form.password}  required />
                        </li>


                        <li className='form-input'>
                            <label htmlFor="displayName" className='start h3'>
                                Имя
                            </label>
                            <input id="displayName" type="text" name='displayName' minLength={5} onChange={saveForm} value={form.displayName}  required />
                        </li>


                        <li className='form-input'>
                            <label htmlFor="role" className='start h3'>
                                Роль
                            </label>
                            <select name='role' onChange={saveForm} value={form.role} className='role-select' required>
                                <option value="">Выберите роль</option>
                                <option value="SUPERVISOR">Руководитель</option>
                                <option value="MANAGER">Менеждер</option>
                                <option value="ASSISTANT">Ассистент</option>
                            </select>
                        </li>


                    </ul>


                    <div className="center">
                        <button type='submit' className='send-btn' >
                            Отправить
                        </button>
                    </div>


                </form>
            </div>
       </main>
    )
}

export default Register
