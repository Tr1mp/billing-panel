


import './authorization.scss';

const Authorization = () => {
    return (
        <div className="auth__form">
            <div className="form-title">Login</div>
            <div className="form-group">
                <input id="login" className="form-group-input" type="text" placeholder=" " />
                <div className="form-group-cut"></div>
                <label htmlFor="login" className="form-group-placeholder">Username</label>
            </div>

            <div className="form-group">
                <input id="password" className="form-group-input" type="text" placeholder=" " />
                <div className="form-group-cut"></div>
                <label htmlFor="password" className="form-group-placeholder">Password</label>
            </div>
            <button type="text" className="button-submit">submit</button>
        </div>
    )
}

export default Authorization;