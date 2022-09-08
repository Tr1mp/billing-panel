

import "./userCard.scss";

const UserCard = () => {
    return (
        <div className="user__card">
            <div className="user__card-round">
                <h3 className="user__card-round-id">
                    2-705
                </h3>
            </div>
            <div className="user__card-wrapper">
                <h2 className="user__card-name">
                    John Smith<br/>
                    
                </h2>
                <span>User</span>
                <p className="user__card-text">
                    <span>login:</span> some_login
                </p>
                <p className="user__card-text">
                    <span>e-mail:</span> some_long@mail.com
                </p>
            </div>
        </div>
    )
}

export default UserCard;