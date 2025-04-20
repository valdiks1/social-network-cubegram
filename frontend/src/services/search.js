async function getUsersByName(name){
    return await fetch(`/api/v1/search/${name}`,{ credentials: "include" }).then(response => {
        if (!response.ok) {
            throw new Error("Error getting users");
        }
        return response.json();
    })
}

export {getUsersByName};