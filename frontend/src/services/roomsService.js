async function createRoom(name, typeOfCube) {
    return await fetch('/api/v1/rooms', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, typeOfCube}),
        credentials: "include"
    }).then((response) => {
        if(!response.ok){
            throw new Error("Error creating room");
        }
    })
}

export { createRoom };