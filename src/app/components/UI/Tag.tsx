import React from 'react';

type TagProps = {
    type: 'blue' | 'white';
    text: string;
}

const Tag = ({type, text}: TagProps) => {
    return (
        <div className={`w-full h-full rounded-88px flex justify-center items-center px-3 font-inter font-normal text-12px leading-18px ${type === 'blue' ? 'bg-blue1000 text-white' : 'bg-grey30 sm:bg-white text-blue1000'}`}>
            {text}
        </div>
    );
};

export default Tag;