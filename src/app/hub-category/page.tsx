'use client'

import CategoryTitle from "../components/shared/CategoryTitle";
import SearchResults from "../components/SearchResults";
import LearnMore from "../components/LearnMore";
import MainLayout from "../layouts/MainLayout";
import ExpandedDescription from "@/app/components/ExpandedDescription";
import {useState} from "react";
import AnimateHeight, {Height} from "react-animate-height";

export default function HubCategory() {
    const [height, setHeight] = useState<Height>(0);
    return (
        <>
            <MainLayout>
            <CategoryTitle
              breadcrumbs={[
                { href: "/", text: "Zeller Partner Hub" },
                { href: "hub-category", text: "Point of Sale" },
              ]}
              title="Point of Sale"
              description="Connect Zeller Terminal with your Point of Sale for seamless card payments."
              descriptionHeight={height}
              onLinkClick={() => setHeight(prevState => prevState === 0 ? 'auto' : 0)}
            />
            <AnimateHeight
                id="example-panel"
                duration={500}
                height={height}
                >
            <ExpandedDescription id={`expanded-description`}/>
            </AnimateHeight>
            <SearchResults />
            <LearnMore />
            </MainLayout>
        </>
    );
}
