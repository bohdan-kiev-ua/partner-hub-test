type IconArrowLeftProps = {
  width?: string;
  height?: string;
  className?: string;
};

export default function IconArrowLeft({
  width,
  height,
  className,
}: IconArrowLeftProps) {
  return (
    <svg
      width={width || "6"}
      height={height || "12"}
      viewBox="0 0 6 12"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4.71967 11.0303C5.01256 11.3232 5.48744 11.3232 5.78033 11.0303C6.07322 10.7374 6.07322 10.2626 5.78033 9.96967L1.81066 6L5.78033 2.03033C6.07322 1.73744 6.07322 1.26256 5.78033 0.96967C5.48744 0.676777 5.01256 0.676777 4.71967 0.96967L0.21967 5.46967C-0.0732222 5.76256 -0.0732222 6.23744 0.21967 6.53033L4.71967 11.0303Z" />
    </svg>
  );
}
