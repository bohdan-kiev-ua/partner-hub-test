import React, {useState} from 'react';
import Image from "next/image";
import Tag from "@/app/components/UI/Tag";

type PartnersCardProps = {
    partner: {
        logo: string,
        background: string,
        tags: {
            text: string,
            isSelected: boolean,
        }[],
        title: string,
        subtitle: string,
    }
}

const PartnersCard = ({partner}: PartnersCardProps) => {
    const {logo, background, tags, title, subtitle} = partner;
    return (
        <div className={`h-auto sm:h-[344px] max-w-[625px] w-full rounded-2xl relative overflow-hidden shadow-partnerCardShadow sm:shadow-[unset] pb-2 sm:p-4 flex flex-col justify-between`}>
            <div className={`w-full h-240px sm:h-full rounded-2xl relative sm:absolute top-0 left-0`}>
                <Image fill className={`w-full h-full absolute object-cover top-0 left-0`} src={background} alt=""/>
            </div>
            <div className={`w-20 h-20 rounded-lg absolute top-4 sm:top-0 left-4 sm:left-0 sm:relative`}>
                <Image fill className={`w-full h-full absolute object-cover rounded-lg top-0 left-0`} src={logo} alt=""/>
            </div>
            <div className={`bg-cardDataColor w-full p-8 sm:p-4 flex flex-col gap-4 sm:gap-2 z-10 rounded-lg`}>
                <div className={`flex gap-2`}>
                    {
                        tags.map((tag, index) => (
                            <div className={`h-18px`} key={index}>
                                <Tag type={tag.isSelected ? 'blue' : 'white'} text={tag.text}/>
                            </div>
                        ))
                    }
                </div>
                <h6 className={`font-inter font-semibold text-black900 tracking-[-0.22px] text-22px leading-30px`}>{title}</h6>
                <p className={`font-inter font-normal text-black text-sm`}>{subtitle}</p>
            </div>
        </div>
    );
};

export default PartnersCard;