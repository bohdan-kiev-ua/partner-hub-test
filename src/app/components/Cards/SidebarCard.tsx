import React from 'react';
import Image from "next/image";

const SidebarCard = () => {
    return (
        <div className={`w-[320px] h-auto rounded-2xl flex flex-col overflow-hidden bg-grey30 pb-6`}>
            <div className={`w-full p-6 flex items-center justify-between bg-blue1000 mb-2`}>
                <div className={`w-20 h-20 rounded-lg relative`}>
                    <Image fill className={`w-full h-full absolute object-cover rounded-lg top-0 left-0`} src={'/images/partnerLogo1.png'} alt=""/>
                </div>
                <div className={`h-10 px-6 py-[9px] rounded-88px bg-blue1500 text-white font-inter font-semibold text-sm`}>Learn more</div>
            </div>
            <div className={`w-full px-6`}>
                <div className={`text-blue1000 font-inter font-semibold text-sm mt-[13px] mb-[15px]`}>Support</div>
                <div className={`flex flex-col gap-2 mb-[30px]`}>
                    <div className={`flex justify-between items-center`}>
                        <div className={`text-black900 font-inter font-semibold text-sm`}>Email</div>
                        <div className={`text-black900 font-inter font-normal text-sm`}>support@hlpos.com</div>
                    </div>
                    <div className={`flex justify-between items-center`}>
                        <div className={`text-black900 font-inter font-semibold text-sm`}>Phone</div>
                        <div className={`text-black900 font-inter font-normal text-sm`}>1800 778 340</div>
                    </div>
                    <div className={`flex justify-between items-center`}>
                        <div className={`text-black900 font-inter font-semibold text-sm`}>Info</div>
                        <div className={`flex justify-end items-center gap-1`}>
                            <div className={`text-black900 font-inter font-normal text-sm`}>Pay at Table with H&L</div>
                            <img src="/icons/rightGrayArrow.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className={`text-blue1000 font-inter font-semibold text-sm mb-[23px]`}>Images</div>
                <div className={`rounded-lg flex justify-center items-center bg-white`}>
                    <img src="/images/SidebarCardExample.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default SidebarCard;