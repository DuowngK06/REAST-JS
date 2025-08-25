// DetailPost.jsx
function DetailPost({ post }) {
    return (
        <div style={{ borderBottom: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
            <p><b>Id:</b> {post.id}</p>
            <p><b>Title:</b> {post.title}</p>
            <p><b>Content:</b> {post.content}</p>
            <p><b>Author:</b> {post.author}</p>
        </div>
    );
}

export default DetailPost;
