import RoundedButton from "../UI/buttons/RoundedButton";

type PostCardProps = {
  backgroundColor: string;
  backgroundImage: string;
  title: string;
  description: string;
  button: {
    text: string;
    color?: string;
  };
};

export default function PostCard({
  backgroundColor,
  backgroundImage,
  title,
  description,
  button,
}: PostCardProps) {
  return (
    <div
      className={`xl-1440:flex items-center gap-8 w-full h-full rounded-2xl shadow-cardShadow ${backgroundColor} overflow-hidden`}
    >
      <div className="sm:min-w-68 xl:w-624px pt-9 pb-9 pl-8 pr-8">
        <p className="block sm:w-full xl:w-568px font-semibold text-2xl text-white -tracking-0.24px">
          {title}
        </p>
        <p className="block sm:w-full xl:w-560px font-semibold mt-4 text-white leading-6">
          {description}
        </p>
        <div className="max-w-130px sm:min-w-36 lg:min-w-124px h-10 mt-8">
          <RoundedButton text={button.text} color={button.color} />
        </div>
      </div>
      <div className="w-full h-full">
        <img src={backgroundImage} alt={title} className="w-full h-full" />
      </div>
    </div>
  );
}
