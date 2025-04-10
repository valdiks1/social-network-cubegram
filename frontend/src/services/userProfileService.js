async function getUser() {
    return await fetch('/api/v1/myprofile',{ credentials: "include" }).then((response) => { 
        if (!response.ok) {
            throw new Error("Error getting users data");
        }
        return response.json();
    })
}

async function createPost(text) {
    return await fetch('/api/v1/myprofile/posts', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
        credentials: "include"
    }).then((response) => {
        if(!response.ok){
            throw new Error("Error creating new post")
        }
    })
}

async function getPosts(){
    return await fetch('/api/v1/myprofile/posts',{
        credentials: "include"
    }).then((response) => {
        if(!response.ok){
            throw new Error("Error getting users posts");
        }

        return response.json();
    })
}

export {getUser, createPost, getPosts};