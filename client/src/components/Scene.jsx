import { Cat, Pumpkin } from './Icons.jsx';

const SILHOUETTE = '#000000';

function Grave({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) rotate(${(x % 7) - 3})`}>
      <path d="M-20 34v-38a20 20 0 0 1 40 0v38z" fill={SILHOUETTE} />
    </g>
  );
}

function fence(from, to, y) {
  let d = `M${from} ${y}h${to - from}M${from} ${y + 16}h${to - from}`;
  for (let x = from; x <= to; x += 16) d += `M${x} ${y + 44}V${y - 12}l-3 5M${x} ${y - 12}l3 5`;
  return d;
}

// Graveyard night: hills, bare tree, iron fence, black cat, and the house nobody visits
export default function Scene() {
  return (
    <svg className="scene" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <path d="M0 190c200-44 380-20 560-34 200-16 360-70 520-60 150 8 260 50 360 44v160H0z" fill="#161616" />

      {/* haunted house */}
      <g fill={SILHOUETTE}>
        <path d="M850 280V150h210v130z" />
        <path d="M836 154l119-72 119 72z" />
        <path d="M860 170V70h56v100z" />
        <path d="M850 74l38-62 38 62z" />
        <path d="M1020 180V100h46v80z" />
        <path d="M1012 104l31-52 31 52z" />
      </g>
      <g fill="var(--gold)" className="flicker">
        <path d="M878 96a10 10 0 0 1 20 0v22h-20z" />
        <path d="M935 176h26v30h-26z" />
        <path d="M1034 122h18v22h-18z" fill="var(--ember)" />
      </g>
      <path d="M990 280v-44a18 18 0 0 1 36 0v44z" fill="var(--ember)" className="flicker" />

      {/* dead tree */}
      <g stroke={SILHOUETTE} strokeLinecap="round" fill="none">
        <path d="M480 286c6-46 2-76-14-112" strokeWidth="18" />
        <path d="M468 178c-30-22-44-44-50-76M452 150c22-26 28-48 26-82" strokeWidth="9" />
        <path d="M430 132c-22-6-38-16-52-34M422 110c4-18 2-32-8-46M474 96c16-10 26-22 32-40M474 112c-12-12-20-24-22-40" strokeWidth="4.5" />
      </g>

      <path d={fence(620, 830, 216)} stroke={SILHOUETTE} strokeWidth="3.5" fill="none" />

      <Grave x={110} y={240} s={1.15} />
      <Grave x={205} y={246} s={0.9} />
      <Grave x={300} y={238} s={1.25} />
      <Grave x={1210} y={244} s={1} />
      <Grave x={1320} y={238} s={1.2} />

      <path d="M0 268c220-16 460 8 720-2s480-10 720 0v34H0z" fill="#000000" />

      <Cat x="560" y="186" size={88} style={{ color: SILHOUETTE }} />
      <Pumpkin x="700" y="226" size={62} />
      <Pumpkin x="1130" y="232" size={50} />
      <Pumpkin x="360" y="234" size={44} />
    </svg>
  );
}
