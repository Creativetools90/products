import React from 'react';
import './Lang.css';
import { ThemeContext } from '../../../context/myContext';

const Lang = (props) => {
    const { lang, addLanguage } = React.useContext(ThemeContext);
    return (
        <ul className="t_0001">
            {lang.map((lang) => (
                <li key={lang.id} className={`proj_l_tab ${props.class} ${lang.LangThemeColor}`}>
                    {lang.LangName}
                </li>
            ))}
        </ul>
    );
};

export default Lang;
