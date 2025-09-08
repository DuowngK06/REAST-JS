import React from 'react'
import { Toast, ToastContainer } from "react-bootstrap";
export default function Exesince7() {
    const [show, setShow] = useState(true);

    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast show={show} onClose={() => setShow(false)}>
                <Toast.Header closeButton>
                    <strong className="me-auto">Cảnh báo</strong>
                </Toast.Header>
                <Toast.Body>Lỗi kết nối máy chủ.</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}
