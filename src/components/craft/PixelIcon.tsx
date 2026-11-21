// 12×12 pixel sprites drawn as crisp SVG rects — no image files needed.
const COLORS: Record<string, string> = {
  "#": "#292929",
  K: "#292929",
  W: "#FFFCF8",
  G: "#6BAF5D",
  R: "#D6453A",
  B: "#8CC9F3",
  Y: "#E8C66A",
};

const SPRITES = {
  // football
  sports: [
    "...######...",
    ".##WWWWWW##.",
    ".#WWWKKWWW#.",
    "#WWWKKKKWWW#",
    "#WWKKKKKKWW#",
    "#KWWKKKKWWK#",
    "#KKWWKKWWKK#",
    "#WKKWWWWKKW#",
    "#WWWKWWKWWW#",
    ".#WWWWWWWW#.",
    ".##WWWWWW##.",
    "...######...",
  ],
  // game controller
  gaming: [
    "............",
    "............",
    ".##########.",
    "#WWWWWWWWWW#",
    "#WW#WWWWGWW#",
    "#W###WWRWBW#",
    "#WW#WWWWYWW#",
    "#WWWWWWWWWW#",
    ".#WWW##WWW#.",
    ".#WW#..#WW#.",
    "..###..###..",
    "............",
  ],
  // bat
  heroes: [
    "............",
    ".K........K.",
    ".KK......KK.",
    ".KKK.KK.KKK.",
    ".KKKKKKKKKK.",
    "KKKKKKKKKKKK",
    "KK.KKKKKK.KK",
    "K...KKKK...K",
    ".....KK.....",
    "............",
    "............",
    "............",
  ],
  // screen with a play button
  movies: [
    "............",
    "############",
    "#BBBBBBBBBB#",
    "#BBWBBBBBBB#",
    "#BBWWBBBBBB#",
    "#BBWWWBBBBB#",
    "#BBWWWWBBBB#",
    "#BBWWWBBBBB#",
    "#BBWWBBBBBB#",
    "#BBWBBBBBBB#",
    "############",
    "....####....",
  ],
} as const;

export type SpriteName = keyof typeof SPRITES;

export function PixelIcon({
  name,
  size = 60,
}: {
  name: SpriteName;
  size?: number;
}) {
  const rows = SPRITES[name];
  return (
    <svg
      viewBox="0 0 12 12"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {rows.flatMap((row, y) =>
        [...row].map((ch, x) =>
          ch === "." ? null : (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="1.02"
              height="1.02"
              fill={COLORS[ch]}
            />
          ),
        ),
      )}
    </svg>
  );
}
