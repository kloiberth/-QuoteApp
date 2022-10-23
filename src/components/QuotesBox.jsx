import { useState } from 'react';
import quotes from '../quotes.json';
import Button from './Button';

const QuotesBox = ({colors, index, change, indexQuotes}) => {


    return (
        <div className='card card-flex'>
            <p style={{color: colors[index]}}>{quotes[indexQuotes].quote}</p>
            <h2 style={{color: colors[index]}}>{quotes[indexQuotes].author}</h2>
            <Button colors={colors} index={index} change={change}/>
        </div>
    );
};

export default QuotesBox;