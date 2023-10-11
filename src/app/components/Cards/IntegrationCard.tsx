import LongArrowButton from "../UI/buttons/LongArrowButton";

export default function IntegrationCard() {
  return (
    <div className="hidden md:block w-624px p-8 rounded-2xl bg-blue1000">
      <div className="flex flex-col gap-10">
        <p className="block w-440px font-semibold text-2xl -tracking-0.24px text-white">
          Want to integrate this point-of-sale platform with Zeller Terminal?
        </p>
        <div className="flex flex-col gap-2">
          <LongArrowButton
            text="Learn how to link this POS with your Zeller Terminal"
            width="400px"
          />
          <LongArrowButton
            text="Contact Zeller Support for more help getting set up"
            width="398px"
          />
          <LongArrowButton
            text="New to Zeller? Contact Sales to talk about integrated EFTPOS"
            width="468px"
          />
        </div>
      </div>
    </div>
  );
}
