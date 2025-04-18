async function addAttempt(id, time, type) {
    return await fetch('/api/v1/timer', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, time, type }),
        credentials: "include"
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Error adding attempt");
        }
    })
}

async function updateAttempt(id, flags) {
    return await fetch('/api/v1/timer', {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id, flags}),
        credentials: "include"
    }).then((response) => {
        if(!response.ok){
            throw new Error("Error updating attempt");
        }
    })
}

export { addAttempt, updateAttempt };