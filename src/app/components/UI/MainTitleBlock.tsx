import React from 'react';

type MainTitleBlockProps = {
    title: string;
    subtitle: string;
}

const MainTitleBlock = ({title, subtitle}: MainTitleBlockProps) => {
    return (
        <div className={`flex flex-col`}>
            <h2 className={`font-inter font-semibold leading-[-0.64px] text-black900 text-2xl sm:text-32px leading-10 mb-14px`}>{title}</h2>
            <p className={`font-inter font-semibold text-black900 text-sm sm:text-base`}>{subtitle}</p>
        </div>
    );
};

export default MainTitleBlock;