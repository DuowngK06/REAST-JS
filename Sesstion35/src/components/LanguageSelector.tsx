import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { toggleLanguage } from '../redux/slices/languageSlice';

const LanguageSelector: React.FC = () => {
    const lang = useSelector((state: RootState) => state.language.lang);
    const dispatch = useDispatch<AppDispatch>();

    const text = {
        vi: 'Xin chào!',
        en: 'Hello!',
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Ngôn ngữ hiện tại: {lang}</h2>
            <p>{text[lang]}</p>
            <button onClick={() => dispatch(toggleLanguage())}>Chuyển ngôn ngữ</button>
        </div>
    );
};

export default LanguageSelector;
