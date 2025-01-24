import React from 'react';

function Login() {

    const [formData, setFormData] = React.useState({
        username: '',
        password: '',       
    }); 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login form submitted', formData);
    };

    const handleclick = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 300 }}>
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" placeholder="Enter username" onChange={handleclick} />

            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Enter password" onChange={handleclick} />

            <button type="submit">Login</button>
        </form>
    );
}

export default Login;