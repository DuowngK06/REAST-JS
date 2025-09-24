import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { toggleMenu } from '../store/slices/Bai5';

const MenuToggle: React.FC = () => {
    const isVisible = useSelector((state: RootState) => state.menu.isVisible);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div style={{ margin: '20px' }}>
            <button onClick={() => dispatch(toggleMenu())}>
                {isVisible ? 'Ẩn Menu' : 'Hiện Menu'}
            </button>
            {isVisible && (
                <nav style={{ marginTop: '10px', border: '1px solid #ccc', padding: '10px' }}>
                    <ul>
                        <li>Trang chủ</li>
                        <li>Giới thiệu</li>
                        <li>Liên hệ</li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default MenuToggle;
