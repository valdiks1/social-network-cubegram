async function getAttemptsByCubeType(type){
    return await fetch(`/api/v1/attempts/${type}`,{ credentials: "include" }).then(response => {
        if (!response.ok) {
            throw new Error("Error getting attempts");
        }
        return response.json();
    })
}

export {getAttemptsByCubeType}