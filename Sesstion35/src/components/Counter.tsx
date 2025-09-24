import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { increment, decrement, reset } from '../redux/slices/counterSlice';

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Đếm số: {count}</h2>
            <button onClick={() => dispatch(increment())}>Tăng</button>
            <button onClick={() => dispatch(decrement())}>Giảm</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;
