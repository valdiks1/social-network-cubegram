async function getRecords(){
    return await fetch('/api/v1/records',{
        credentials: "include"
    }).then((response) => {
        if(!response.ok){
            throw new Error("Error getting records");
        }

        return response.json();
    })
}

export {getRecords}