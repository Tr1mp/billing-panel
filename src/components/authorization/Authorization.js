import { useEffect, useMemo, useState } from "react";
import { Form, Formik, Field, ErrorMessage as ErrorFormikMessage} from 'formik';
import * as Yup from 'yup';

import useAuthUser from "../../services/AuthUser";

import './authorization.scss';
import SetContent from "../../util/SetContent";

const Authorization = () => {
    const {isUser, requetsLogin, action, clearError, setAction} = useAuthUser();
    const [error, setError] = useState('');

    useEffect(() => {
        isUser();
        // eslint-disable-next-line
    }, [])

    const onRequest = (username, password) => {
        clearError();
        requetsLogin(username, password)
            .then(() => setAction('loaded'))
            .catch(err => err.message === "401" ?
                setError("Incorrect username or password") :
                setError(`Error ${err.message}`));
    }

    

    const renderBtn = () => {
        return (
            <button 
                type="onSubmit" 
                className="btn btn-primary">
                    submit
            </button>
        )
    }
    const element = useMemo(() => SetContent(action, () => renderBtn()), 
    // eslint-disable-next-line
        [action])
    const authForm = () => {
        return (
            <Formik
                initialValues={{ username: '', password: ''}}
                onSubmit={values => onRequest(values.username, values.password)}
                validationSchema= {Yup.object({
                    username: Yup.string()
                            .required("Empty field")
                            .min(3, "The username is too short")
                            .max(28, "The username is too long"),
                    password: Yup.string()
                            .required("Empty field")
                            .min(8, "The password is too short")
                            .max(28, "The username is too long"),
                    
                })}
                >
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
                    <ErrorFormikMessage className="form__error" name="username" component="h3"/>
                    <div className="form-group">
                        <Field 
                            className="form-group-input"
                            name="password"
                            id="password" 
                            type="password" 
                            placeholder=" " />
                            
                        <div className="form-group-cut"></div>
                        <label 
                            htmlFor="password" 
                            className="form-group-placeholder">
                                Password
                        </label>
                        
                    </div>
                    <ErrorFormikMessage className="form__error" name="password" component="h3"/>
                    {element}
                    {error ? <h3 className="form__error">{error}</h3> : null}
                </Form>
            </Formik>
            
        )
    }

    const render = useMemo(() => authForm(), 
        // eslint-disable-next-line
        [error, action]);
    return (
        <>
            {render}
        </>
        
    )
}

export default Authorization;