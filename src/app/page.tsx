import MainLayout from "@/app/layouts/MainLayout";
import PartnersCard from "@/app/components/Cards/PartnersCard";
import MainTitleBlock from "@/app/components/UI/MainTitleBlock";
import Section from "./components/shared/Section";
import sectionCards from "../data/sectionCards.json";
import PostCard from "./components/Cards/PostCard";
import LearnMore from "./components/LearnMore";
import TitleSearch from "@/app/components/TitleSearch";

const partnersData = [
  {
    id: 1,
    logo: "/images/partnerLogo1.png",
    background: "/images/partnerImage1.png",
    tags: [
      {
        text: "Featured",
        isSelected: true,
      },
      {
        text: "Zeller Integrated",
        isSelected: false,
      },
      {
        text: "Popular",
        isSelected: false,
      },
    ],
    title: "H&L",
    subtitle:
      "Exceed POS from H&L provides you with total control over your food and beverage operation - now with Pay at Table.",
  },
  {
    id: 2,
    logo: "/images/partnerLogo2.png",
    background: "/images/partnerImage2.png",
    tags: [
      {
        text: "Featured",
        isSelected: true,
      },
      {
        text: "Zeller Integrated",
        isSelected: false,
      },
      {
        text: "Popular",
        isSelected: false,
      },
    ],
    title: "Xero",
    subtitle: "Accounting software made for small business.",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className={`mt-136px mx-8`}>
        <MainTitleBlock
          title={`Zeller Partner Hub`}
          subtitle={`Connect business apps and software with Zeller.`}
        />
      </div>
      <div className={`mt-[6px] mb-5 flex justify-between items-center flex-col sm:flex-row sm:h-12 pl-8 sm:pl-[30px] pr-4 sm:pr-8`}>
        <div className={`flex items-center gap-2 w-full sm:w-auto mb-[23px] sm:mb-[unset]`}>
          <img src="/icons/blueRoundedPlay.svg" alt=""/>
          <span className={`text-blue1000 font-inter font-semibold text-sm`}>What is Zeller Partner Hub?</span>
        </div>
        <div className={`flex justify-end sm:justify-start w-full sm:w-auto`}>
          <TitleSearch />
        </div>
      </div>

      <div
        className={`flex flex-col items-center pb-8 lg:items-start lg:flex-row gap-8 sm:gap-30px`}
      >
        {partnersData.map((partner) => (
          <PartnersCard partner={partner} />
        ))}
      </div>

      <div className="flex flex-col gap-8 ">
        <Section
          title="Point of Sale"
          link={{ href: "/", text: "All POS Integrations" }}
          description="Integrate Zeller Terminal with your POS."
          cards={sectionCards}
        />

        <Section
          title="Accounting"
          link={{ href: "/", text: "All accounting software" }}
          description="Manage your tax and business finances."
          cards={sectionCards}
        />

        <PostCard
          backgroundColor="bg-blue1000"
          backgroundImage="/images/partnerCard-2.jpg"
          title="Power up your Zeller Terminal"
          description="Shop for Zeller Terminal accessories and receive fast and free shipping on all orders."
          button={{ text: "Shop now", color: "bg-blue1500" }}
        />

        <Section
          title="Ecommerce and CMS"
          link={{ href: "/", text: "All eCommerce platforms" }}
          description="Sell online with platforms that offer a range of customisable design templates."
          cards={sectionCards}
        />

        <Section
          title="Buy Now Pay Later"
          link={{ href: "/", text: "All BNPL partners" }}
          description="Accept Buy Now Pay Later (BNPL) cards in-store with Zeller Terminal."
          cards={sectionCards}
        />

        <LearnMore />
      </div>
    </MainLayout>
  );
}
