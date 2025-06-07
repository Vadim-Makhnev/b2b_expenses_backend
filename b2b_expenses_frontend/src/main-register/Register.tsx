import { useState } from 'react'
import './Register.css'

function Register() {

    const [form, setForm] = useState({
        email: "",
        password: "",
        name: "",
        role: ""
    })

    const saveForm = (e:  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target
        setForm(form => ({
            ...form, 
            [name]: value
        }))
    }

    const printData = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(form)
    }

    return (
       <main>
            <div className="main container center">
                <form className="register-form" onSubmit={printData}>
                    <ul className='items-list'>
                        <li className='h2 h2-padding'>Зарегистрируйте аккаунт</li>


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
                            <input id="password"  type="password" name='password' onChange={saveForm} value={form.password}  required />
                        </li>


                        <li className='form-input'>
                            <label htmlFor="name" className='start h3'>
                                Имя
                            </label>
                            <input id="name" type="text" name='name' onChange={saveForm} value={form.name}  required />
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
