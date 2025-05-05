async function createRoom(name, typeOfCube) {
    return await fetch('/api/v1/rooms', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, typeOfCube }),
        credentials: "include"
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Error creating room");
        }
    })
}

async function getAllRooms() {
    return await fetch('/api/v1/rooms', {
        credentials: "include"
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Error getting all rooms");
        }

        return response.json();
    })
}

async function getMyRooms() {
    return await fetch('/api/v1/rooms/myrooms', {
        credentials: "include"
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Error getting my rooms");
        }

        return response.json();
    })
}

async function getOpenRooms(){
    return await fetch('/api/v1/rooms/openrooms', {
        credentials: "include"
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Error getting open rooms");
        }

        return response.json();
    })
}

async function getRoom(id) {
    return await fetch(`/api/v1/rooms/room/${id}`, {
        credentials: "include"
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Error getting room");
        }

        return response.json();
    })
}

async function addUserToRoom(roomId, userId) {
    return await fetch(`/api/v1/rooms/room/${roomId}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
        credentials: "include"
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Error adding user")
        }
    })

}

async function removeUserFromRoom(roomId, userId){
    return await fetch(`/api/v1/rooms/room/${roomId}/users`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
        credentials: "include"
    }).then((response) => {
        if(response.status === 401){
            throw new Error("You can't delete yourself");
        }
        if (!response.ok) {
            throw new Error("Error deleting user")
        }
    })
}

async function addAttemptIntoRoom(id, time, type, roomId){
    return await fetch(`/api/v1/rooms/room/${roomId}/timer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, time, type }),
        credentials: "include"
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Error adding attempt into room");
        }
    })
}


export { createRoom, getAllRooms, getMyRooms, getRoom, addUserToRoom, removeUserFromRoom, getOpenRooms, addAttemptIntoRoom };