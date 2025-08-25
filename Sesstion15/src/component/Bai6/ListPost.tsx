// ListPost.jsx
import { useState } from "react";
import DetailPost from "./DetailPost";

function ListPost() {
    const [posts] = useState([
        {
            id: 1,
            title: "Tại sao nên học ReactJS",
            content: "Học ReactJS để đi làm",
            author: "David",
        },
        {
            id: 2,
            title: "Props trong ReactJS",
            content: "Props giúp truyền dữ liệu từ component con xuống component cha",
            author: "Linda",
        },
        {
            id: 3,
            title: "State trong ReactJS là gì?",
            content: "State giúp lưu trữ trạng thái dữ liệu bên trong một component",
            author: "David",
        },
    ]);

    return (
        <div style={{ border: "1px solid black", padding: "20px", width: "500px" }}>
            <h2 style={{ textAlign: "center" }}>Danh sách bài viết</h2>
            {posts.map((post) => (
                <DetailPost key={post.id} post={post} />
            ))}
        </div>
    );
}

export default ListPost;
