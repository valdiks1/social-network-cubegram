async function login(email, password) {
    const response = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include"
    });
    if (!response.ok) {
        // invalid password or user does not exist
        if (response.status === 401) {
            throw new Error("Invalid credentials");
        }
        throw new Error("Error logging in");
    }
}

export {login};