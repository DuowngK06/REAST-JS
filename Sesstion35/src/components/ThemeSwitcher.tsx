import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { toggleTheme } from '../redux/slices/themeSlice';

const ThemeSwitcher: React.FC = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDarkMode);
    const dispatch = useDispatch<AppDispatch>();

    const styles = {
        backgroundColor: isDark ? '#222' : '#eee',
        color: isDark ? '#fff' : '#000',
        padding: '20px',
        textAlign: 'center',
    };

    return (
        <div style={styles}>
            <h1>{isDark ? 'Chế độ Tối 🌙' : 'Chế độ Sáng ☀️'}</h1>
            <button onClick={() => dispatch(toggleTheme())}>Chuyển chế độ</button>
        </div>
    );
};

export default ThemeSwitcher;
