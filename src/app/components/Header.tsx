'use client'

import React from 'react';
import RoundedButton from "@/app/components/UI/buttons/RoundedButton";
import Image from "next/image";
import useWindowSize from "@/app/hooks/useWindowSize";

const Header = () => {
    const windowSize = useWindowSize();

    return (
        <div className={`h-20 lg:h-24 w-screen flex justify-center fixed top-0 left-0 z-[100] bg-white`}>
            {windowSize.width >= 1024 ? (
                <div className={`h-full w-full max-w-1440px px-28 flex justify-between items-center`}>
                    <div className={`h-10 w-220px relative`}>
                        <div className={`h-10 w-115px relative`}>
                            <Image fill className={`w-full h-10 object-cover`} src={'/images/logotype.svg'} alt=""/>
                        </div>
                    </div>
                    <div className={`h-full w-[471px] flex items-center`}>
                        <div className={`flex justify-center items-center gap-2 w-[132px]`}>
                            <div className={`text-black900 font-inter text-sm font-semibold`}>Solutions</div>
                            <div className={`w-3 h-3 relative mt-5px cursor-pointer`}>
                                <Image fill className={`w-3 h-3 object-contain`} src={'/icons/downArrow.svg'} alt=""/>
                            </div>
                        </div>
                        <div className={`flex justify-center items-center gap-2 w-[140px]`}>
                            <div className={`text-black900 font-inter text-sm font-semibold`}>Resources</div>
                            <div className={`w-3 h-3 relative mt-5px cursor-pointer`}>
                                <Image fill className={`w-3 h-3 object-contain`} src={'/icons/downArrow.svg'} alt=""/>
                            </div>
                        </div>
                        <div className={`flex justify-center items-center gap-2 w-[103px]`}>
                            <div className={`text-black900 font-inter text-sm font-semibold`}>Shop</div>
                            <div className={`w-3 h-3 relative mt-5px cursor-pointer`}>
                                <Image fill className={`w-3 h-3 object-contain`} src={'/icons/downArrow.svg'} alt=""/>
                            </div>
                        </div>
                        <div className={`flex justify-center items-center w-24 text-black900 font-inter text-sm font-semibold cursor-pointer`}>
                            Pricing
                        </div>
                    </div>
                    <div className={`flex items-center`}>
                        <div className={`h-12 w-90px flex items-center justify-center text-black900 font-inter text-sm font-semibold cursor-pointer`}>Log In</div>
                        <div className={`h-10 w-130px `}>
                            <RoundedButton text={`Sign up free`} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`h-full w-full flex justify-between items-center px-4 sm:px-28`}>
                    <img src="/icons/hamburgerMenu.svg" alt=""/>
                    <div className={`h-10 w-115px relative mb-2`}>
                        <Image fill className={`w-full h-10 object-cover`} src={'/images/logotype.svg'} alt=""/>
                    </div>
                    <img src="/icons/login.svg" alt=""/>
                </div>
            )}
        </div>
    );
};

export default Header;
