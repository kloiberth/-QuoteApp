import React from 'react';

const Button = ({colors, index, change}) => {
    return (
        <div className='button'>
            <button onClick={change}>
                
                <i className="fa-solid fa-circle-chevron-right" style={{color: colors[index]}}>
                </i>
            </button>
        </div>
    );
};

export default Button;