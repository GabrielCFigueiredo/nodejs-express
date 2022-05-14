
let Posts = []

export const createPosts = (data, user) => {

    const post = ({
        createdBy: user.email,
        ...data
    })

    Posts.push(post)
    return post

}

export const getPosts = (id) => {

    if (id) {
        const postId = Posts[id]
        if (!postId) throw new Error("Post não encontrado")
        return postId
    }
    return Posts
}