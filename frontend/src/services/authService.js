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

async function logout() {
    const response = await fetch("/api/v1/auth/logout", { method: "DELETE", credentials: "include" });
    if (!response.ok) {
        if (response.status === 400) {
            throw new Error("Bad request - session does not exist");
        }
        throw new Error("Error logging out");
    }
      
  }

export {login, logout};