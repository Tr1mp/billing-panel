import { useEffect } from "react";
import { Form, Formik, Field, ErrorMessage as ErrorFormikMessage} from 'formik';

import useAuthUser from "../../services/AuthUser";

import './authorization.scss';

const Authorization = () => {

    const {isUser, requetsLogin} = useAuthUser();
    useEffect(() => {
        isUser();
    }, [])

    const onRequest = (username, password) => {
        console.log('request');
        requetsLogin(username, password);
    }

    const authForm = () => {
        return (
            <Formik
                initialValues={{ username: '', password: ''}}
                onSubmit={values => onRequest(values.username, values.password)}>
                <Form className="auth__form">
                    <div className="form-title">Login</div>
                    <div className="form-group">
                        <Field  
                            className="form-group-input" 
                            name="username"
                            id="username" 
                            type="text" 
                            placeholder=" "/>
                        <div className="form-group-cut"></div>
                        <label 
                            htmlFor="username" 
                            className="form-group-placeholder">
                                Username
                        </label>
                    </div>
                    <div className="form-group">
                        <Field 
                            className="form-group-input"
                            name="password"
                            id="password" 
                            type="text" 
                            placeholder=" " />
                        <div className="form-group-cut"></div>
                        <label 
                            htmlFor="password" 
                            className="form-group-placeholder">
                                Password
                        </label>
                    </div>
                    <button 
                        type="onSubmit" 
                        className="button-submit">
                            submit
                    </button>
                </Form>
            </Formik>
            
        )
    }

    const render = authForm();
    return (
        <>
            {render}
        </>
        
    )
}

export default Authorization;