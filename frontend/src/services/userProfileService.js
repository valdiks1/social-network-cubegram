async function getUser() {
    return await fetch('/api/v1/myprofile',{ credentials: "include" }).then((response) => { 
        if (!response.ok) {
            throw new Error("Error getting users data");
        }
        return response.json();
    })
}

export {getUser};