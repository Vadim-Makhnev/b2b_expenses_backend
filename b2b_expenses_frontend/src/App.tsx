import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import MainPage from './MainPage/MainPage';
import Login from './main-login/Login';
import Register from './main-register/Register';
import Panel from './panelPage/Panel';
import NotFound from './NotFound/NotFound';
import FileLoad from './FileLoad/FileLoad';
import Expenses from "./Expenses/Expenses.tsx";

function App() {
    return (
        <>
            <Header/>

            <div className="app-container">
                <Routes>
                    <Route path="/main/*" element={<MainPage/>}>
                        <Route path="panel" element={<Panel/>}/>
                        <Route path="load" element={<FileLoad/>}/>
                        <Route path="table" element={<Expenses/>}/>
                        <Route path="*" element={<Navigate to="/not-found" replace/>}/>
                    </Route>
                    <Route index element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/not-found" element={<NotFound/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route
                        path="/unauthorized"
                        element={<div className="center h2">Доступ запрещён</div>}
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;