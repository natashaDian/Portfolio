type PixelCatLogoProps = {
  className?: string;
};

const pixels = [
  "000000000",
  "010000010",
  "011000110",
  "011101110",
  "011111110",
  "011121110",
  "011111110",
  "001111100",
  "000000000",
];

export default function PixelCatLogo({ className = "" }: PixelCatLogoProps) {
  return (
    <div
      aria-hidden="true"
      className={`grid grid-cols-9 gap-0.5 ${className}`}
    >
      {pixels.flatMap((row, rowIndex) =>
        row.split("").map((pixel, colIndex) => (
          <span
            key={`${rowIndex}-${colIndex}`}
            className={
              pixel === "0"
                ? "size-1.5"
                : pixel === "2"
                  ? "size-1.5 bg-[#C97B84]"
                  : "size-1.5 bg-[#EDE6F0]"
            }
          />
        )),
      )}
    </div>
  );
}
