import React from 'react'
import Alert from "react-bootstrap/Alert";
export default function Exesince5() {
    return (
        <div>
            <div style={{ width: "400px", margin: "20px auto" }}>
                <Alert variant="success" dismissible>
                    Thêm tài khoản thành công.
                </Alert>

                <Alert variant="danger" dismissible>
                    Thêm mới tài khoản thất bại.
                </Alert>

                <Alert variant="warning" dismissible>
                    Tên không được để trống.
                </Alert>
            </div>
            );
}
        </div>
    )
}
