import React from 'react';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

type MainLayoutProps = {
    children: React.ReactNode,
    type?: 'default' | 'withoutFooter',
}

const MainLayout = ({children, type = 'default'}: MainLayoutProps) => {
    return (
        <main className={`w-full min-h-screen h-full bg-white flex justify-center`}>
            <div className={`h-full w-full max-w-1440px md:px-12 xl:px-20 mb-12 md:mb-56px`}>
                <Header />
                    {children}
                {type !== 'withoutFooter' ? <Footer /> : null}
            </div>
        </main>
    );
};

export default MainLayout;