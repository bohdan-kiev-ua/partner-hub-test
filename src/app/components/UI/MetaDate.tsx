type MetaDateProps = {
  date: string;
};

export default function MetaDate({ date }: MetaDateProps) {
  return (
    <span className={`text-12px font-normal leading-18px text-black900`}>
      <time dateTime={date}>{date}</time>
    </span>
  );
}
