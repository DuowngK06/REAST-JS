import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { toggleMode } from '../store/slices/Bai4';

const DisplayMode: React.FC = () => {
    const mode = useSelector((state: RootState) => state.displayMode.mode);
    const dispatch = useDispatch<AppDispatch>();

    const items = ['Apple', 'Banana', 'Cherry', 'Date'];

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Chế độ hiển thị: {mode}</h2>
            <button onClick={() => dispatch(toggleMode())}>Chuyển chế độ</button>
            <div style={{ display: mode === 'grid' ? 'grid' : 'block', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '20px' }}>
                {items.map((item, index) => (
                    <div key={index} style={{ border: '1px solid gray', padding: '10px' }}>{item}</div>
                ))}
            </div>
        </div>
    );
};

export default DisplayMode;
