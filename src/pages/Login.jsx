import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();
            if (!response.ok) {
                console.log(data.message);
                return;
            }
            //console.log(data);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            console.log("Saved token:", localStorage.getItem("token"));
            console.log("Saved user:", localStorage.getItem("user"));
            console.log("Current origin:", window.location.origin);

            console.log("Login successful");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login-page">
            <div className="login-box">
                <h1>Welcome Back</h1>
                <p>Login to your SilkIntel account</p>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p className="register-link">
                    Don't have an account? <span>Register</span>
                </p>
            </div>
        </div>
    );
}

export default Login;
