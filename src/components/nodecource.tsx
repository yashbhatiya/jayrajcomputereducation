import { useState } from "react";

export default function NodeProtected() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [password, setPassword] = useState("");

    const correctPassword = "yash123"; // change this

    const handleLogin = () => {
        if (password === correctPassword) {
            setLoggedIn(true);
        } else {
            alert("Wrong password");
        }
    };

    if (!loggedIn) {
        return (
            <div style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px"
            }}>
                <h2>Protected Node Page</h2>

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        padding: "10px",
                        width: "250px"
                    }}
                />

                <button
                    onClick={handleLogin}
                    style={{
                        padding: "10px 20px",
                        cursor: "pointer"
                    }}
                >
                    Login
                </button>
            </div>
        );
    }

    return (
        <iframe
            src="/nodejs_express_complete_course.html"
            style={{
                width: "100%",
                height: "100vh",
                border: "none",
                display: "block"
            }}
            title="Node Page"
        />
    );
}