import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { generateList } from '../redux/slices/randomListSlice';

const RandomList: React.FC = () => {
    const list = useSelector((state: RootState) => state.randomList.list);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Danh sách số ngẫu nhiên</h2>
            <button onClick={() => dispatch(generateList())}>Tạo danh sách</button>
            <ul>
                {list.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    );
};

export default RandomList;
