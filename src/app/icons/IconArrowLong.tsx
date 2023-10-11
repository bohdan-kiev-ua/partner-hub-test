type IconArrowLongProps = {
  width?: number;
  height?: number;
  className?: string;
};

export default function IconArrowLong({
  width,
  height,
  className,
}: IconArrowLongProps) {
  return (
    <svg
      width={width || "16"}
      height={height || "16"}
      viewBox="0 0 16 16"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.7071 3.29342C11.3166 2.90288 10.6835 2.90284 10.2929 3.29334C9.90239 3.68384 9.90235 4.317 10.2929 4.70755L12.5855 7.00049H1C0.447715 7.00049 0 7.4482 0 8.00049C0 8.55277 0.447715 9.00049 1 9.00049H12.5853L10.2929 11.2929C9.90237 11.6834 9.90237 12.3166 10.2929 12.7071C10.6834 13.0976 11.3166 13.0976 11.7071 12.7071L15.7066 8.70759C16.0971 8.31709 16.0971 7.68396 15.7067 7.29342L11.7071 3.29342Z" />
    </svg>
  );
}
