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

async function getAllRooms() {
    return await fetch('/api/v1/rooms', {
        credentials: "include"
    }).then((response) => {
        if(!response.ok){
            throw new Error("Error getting all rooms");
        }

        return response.json();
    })
}

async function getMyRooms() {
    return await fetch('/api/v1/rooms/myrooms', {
        credentials: "include"
    }).then((response) => {
        if(!response.ok){
            throw new Error("Error getting my rooms");
        }

        return response.json();
    })
}

async function getRoom(id) {
    return await fetch(`/api/v1/rooms/room/${id}`, {
        credentials: "include"
    }).then((response) => {
        if(!response.ok){
            throw new Error("Error getting room");
        }

        return response.json();
    })
}

export { createRoom, getAllRooms, getMyRooms, getRoom };