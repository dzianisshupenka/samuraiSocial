import React from 'react';

let loginStyle = {
    backgroundColor: "rgba(86, 90, 69, 0.5)",
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "5px"
}

const Login = (props) => {
    
    return <div>
        <div style = {loginStyle}>
            login <textarea></textarea>
        </div>
        <div style = {loginStyle}>
            password <textarea></textarea>
        </div>
    </div>

}

export default Login;