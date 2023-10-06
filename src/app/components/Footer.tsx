'use client'

import React from 'react';
import Image from "next/image";
import RoundedButton from "@/app/components/UI/buttons/RoundedButton";
import useWindowSize from "@/app/hooks/useWindowSize";

const tags = ['Zeller Terminal', 'Zeller Transaction Account', 'Zeller Debit Card', 'Zeller Invoices', 'Zeller App', 'Integrated EFTPOS', 'Pay at Table', 'Zero-Cost EFTPOS', 'Zeller Contact Directory', 'Zeller Corporate Cards'];
const menuLists = [
    {
        desktop: 0,
        mobile: 0,
        items: ['Shop', 'Zeller Terminal', 'Charging Dock', 'Receipt Paper', 'Zeller SIM Card'],
    },
    {
        desktop: 1,
        mobile: 1,
        items: ['Businesses', 'Retail', 'Trades/Services', 'Hospitality', 'Pubs/Venues', 'Health/Beauty', 'Events'],
    },
    {
        desktop: 2,
        mobile: 4,
        items:['Resources', 'Business Blog', 'Reports', 'Pricing', 'Affiliate Program', 'Apple Pay', 'Site Map', 'Careers', 'Zeller Partner Hub', 'Popular Searches'],
    },
    {
        desktop: 3,
        mobile: 2,
        items: ['Support', 'Zeller Support', 'Zeller Status', 'Contact Sales', 'Partner Program'],
    },
    {
        desktop: 4,
        mobile: 3,
        items: ['Zeller', 'About Us', 'Press/Media', 'Security', 'Terms of Service', 'Financial Services Guide', 'Privacy', 'Legal Information'],
    },
]

const linkedList = ['Social Media', 'Facebook', 'Instagram', 'LinkedIn', 'X (Twitter)', 'YouTube'];

const Footer = () => {
    const windowSize = useWindowSize();

    return (
        <div className={`lg:w-full bg-grey30 rounded-2xl mx-4 md:mx-0 p-8`}>
            <div className={`flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between mb-8`}>
                <div className={`h-10 w-115px ml-8 lg:ml-0 relative rounded-4`}>
                    <Image fill className={`w-full h-10 object-cover`} src={'/images/logotype.svg'} alt=""/>
                </div>
                <div className={`flex justify-end pr-4 lg:pr-0 flex-wrap gap-4 w-full lg:w-[690px] ml-8`}>
                    {tags.map((tag, index) => (
                        <div key={index} className={`px-4 py-5px text-black900 font-inter font-semibold text-sm bg-white rounded-lg`}>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <div className={`bg-black900 h-px w-full mb-4`} />
            <div className={`flex flex-col sm:flex-row h-[1200px] sm:h-auto lg:justify-between flex-wrap sm:gap-x-6 mb-8`}>
                {(windowSize.width >= 640 ? menuLists.sort((a, b) => a.desktop > b.desktop ? 1 : -1) : menuLists.sort((a, b) => a.mobile > b.mobile ? 1 : -1)).map((list, index) => (
                    <div key={index} className={`flex flex-col`}>
                        {list.items.map((item, index) => (
                            <div key={index} className={`h-12 py-[13px] font-inter text-sm cursor-pointer ${index === 0 ? 'text-blue1000 font-semibold' : 'text-black900 font-normal'}`}>
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
                <div className={`flex flex-col max-w-[122px] w-full`}>
                    {linkedList.map((item, index) => (
                        <div key={index} className={`h-12 py-[13px] font-inter text-sm cursor-pointer flex justify-between gap-2 w-full ${index === 0 ? 'text-blue1000 font-semibold' : 'text-black900 font-normal'}`}>
                            <div>{item}</div>
                            {index ? <img src="/icons/linkGrayArrow.svg" alt=""/> : null }
                        </div>
                    ))}
                </div>
            </div>
            <div className={`bg-black900 h-px w-full mb-8`} />
            <div className={`text-black900 font-inter text-12px font-normal leading-18px mb-8`}>
                Copyright 2023 Zeller Australia Pty Ltd ABN 14 649 001 383. The Enhanced Zeller Payment Services are issued by Zeller Australia Pty Ltd, the Zeller Debit Card component of the Enhanced Zeller Payment Services is issued pursuant to license by Mastercard Asia/Pacific Pte. Ltd. The Mastercard brand mark are registered trademarks and the circles design and Tap & go are trademarks of Mastercard International Incorporated. Apple Pay and Face ID are trademarks of Apple Inc., registered in the U.S. and other countries. Any advice provided is general only, has been prepared without taking into account your objectives, financial situation or needs and may not be right for you. Consequently, before acting on this information, you should consider the appropriateness of this information having regard to your objectives, financial situation and needs. You should obtain and consider the Product Disclosure Statement (PDS) and relevant Terms & Conditions before using Zeller’s products and services to consider if they are right for you. Zeller Australia Pty Ltd holds an Australian Financial Services Licence (AFSL No 534281) which authorises it to issue the Enhanced Zeller Payment Services. Please read Zeller’s Financial Services Guide for more details.
            </div>
            <div className={`bg-black900 h-px w-full mb-8`} />
            <div className={`flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between w-full`}>
                <div className={`flex flex-col mb-2`}>
                    <div className={`text-blue1000 font-inter font-semibold text-lg`}>
                        Stay up to date with Zeller news
                    </div>
                    <div className={`text-black900 font-inter font-normal text-lg text-sm`}>
                        Subscribe, and you’ll be the first to receive new stories, product announcements and special offers by email.
                    </div>
                </div>
                <div className={`h-10 w-117px lg:mt-2`}>
                    <RoundedButton text={'Subscribe'} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
