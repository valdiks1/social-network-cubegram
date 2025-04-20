async function getUser() {
    return await fetch('/api/v1/myprofile',{ credentials: "include" }).then((response) => { 
        if (!response.ok) {
            throw new Error("Error getting users data");
        }
        return response.json();
    })
}

async function getUserById(id) {
    return await fetch(`/api/v1/user/${id}`,{ credentials: "include" }).then((response) => { 
        if (!response.ok) {
            throw new Error("Error getting users data");
        }
        return response.json();
    })
}

async function getPostsByUserId(id){
    return await fetch(`/api/v1/user/${id}/posts`,{ credentials: "include" }).then((response) => { 
        if (!response.ok) {
            throw new Error("Error getting users posts");
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

async function deletePost(id){
    return await fetch('/api/v1/myprofile/posts', {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
        credentials: "include"
    }).then((response) => {
        if(!response.ok){
            throw new Error("Error deleting post")
        }
    })
}

async function editPost(id, text){
    return await fetch('/api/v1/myprofile/posts', {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, text }),
        credentials: "include"
    }).then((response) => {
        if(!response.ok){
            throw new Error("Error editing post")
        }
    })
}

export {getUser, createPost, getPosts, deletePost, editPost, getUserById, getPostsByUserId};