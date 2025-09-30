import React, { useState } from "react";

const UploadImages = () => {
    const [images, setImages] = useState([]);
    const [uploadedUrls, setUploadedUrls] = useState([]);

    const handleChange = (e) => {
        setImages([...e.target.files]);
    };

    const handleUpload = async () => {
        const urls = [];

        for (const file of images) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "YOUR_UPLOAD_PRESET"); // thay bằng preset của bạn

            const res = await fetch(
                `https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await res.json();
            urls.push(data.secure_url);
        }

        setUploadedUrls(urls);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h3>Upload nhiều ảnh lên Cloudinary</h3>
            <input type="file" multiple onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>

            <div style={{ marginTop: "20px" }}>
                {uploadedUrls.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt="uploaded"
                        style={{ width: "200px", margin: "10px" }}
                    />
                ))}
            </div>
        </div>
    );
};

export default UploadImages;
