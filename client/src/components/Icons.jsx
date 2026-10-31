// Hand-drawn Halloween icon set.
// Everything inherits `currentColor`; glowing parts use the --ember/--gold tokens.

const Svg = ({ size, viewBox = '0 0 64 64', children, ...rest }) => (
  <svg width={size} height={size} viewBox={viewBox} fill="none" aria-hidden="true" {...rest}>
    {children}
  </svg>
);

const stroke = { stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' };

// Jack-o'-lantern
export function Pumpkin({ size = 64, ...rest }) {
  return (
    <Svg size={size} viewBox="0 0 120 110" {...rest}>
      <path d="M54 22c0-8-3-13-8-17l11-4c5 5 8 12 8 21z" fill="#5f8f3a" />
      <ellipse cx="20" cy="64" rx="18" ry="31" fill="#c9500c" />
      <ellipse cx="100" cy="64" rx="18" ry="31" fill="#c9500c" />
      <ellipse cx="38" cy="63" rx="23" ry="39" fill="#e8650f" />
      <ellipse cx="82" cy="63" rx="23" ry="39" fill="#e8650f" />
      <ellipse cx="60" cy="62" rx="22" ry="41" fill="#ff7a18" />
      <g fill="#ffe08a" className="pumpkin__glow">
        <path d="M24 56l18-13 5 19zM96 56L78 43l-5 19z" />
        <path d="M60 58l6 11H54z" />
        <path d="M20 72l12 4 7-6 8 8 13-8 13 8 8-8 7 6 12-4c-4 16-20 25-40 25s-36-9-40-25z" />
      </g>
    </Svg>
  );
}

// Black cat, sitting, tail curled
export function Cat({ size = 100, ...rest }) {
  return (
    <Svg size={size} viewBox="0 0 100 100" {...rest}>
      <path d="M68 92c20 2 28-10 24-24-2-8-9-10-12-6" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M22 16l4 13h20l4-13 3 24c0 8-8 14-17 14s-17-6-17-14z" fill="currentColor" />
      <path d="M24 46c-6 14-8 30-6 48h54c3-20-8-40-28-46z" fill="currentColor" />
      <path className="blink" d="M26 35l8 3-7 3zM46 35l-8 3 7 3z" fill="var(--gold)" />
    </Svg>
  );
}

export function Bat({ size = 40, ...rest }) {
  return (
    <Svg size={size} viewBox="0 0 64 32" {...rest}>
      <path
        fill="currentColor"
        d="M32 9l3-5 1 5c1 1 2 3 2 5 5-6 13-9 25-8-4 3-6 7-6 13-3-3-6-3-9 0-2-3-5-3-8 1-3 2-5 6-8 9-3-3-5-7-8-9-3-4-6-4-8-1-3-3-6-3-9 0 0-6-2-10-6-13 12-1 20 2 25 8 0-2 1-4 2-5l1-5z"
      />
    </Svg>
  );
}

// Glowing pair of eyes in the dark
export function Eyes({ size = 48, delay = 0, ...rest }) {
  return (
    <Svg size={size} viewBox="0 0 48 18" {...rest}>
      <g className="blink" style={{ animationDelay: `${delay}s` }}>
        <path d="M2 9c4-6 11-6 16 0-5 5-12 5-16 0z" fill="var(--gold)" />
        <path d="M46 9c-4-6-11-6-16 0 5 5 12 5 16 0z" fill="var(--gold)" />
        <ellipse cx="10" cy="8.6" rx="1.4" ry="3.6" fill="#08060c" />
        <ellipse cx="38" cy="8.6" rx="1.4" ry="3.6" fill="#08060c" />
      </g>
    </Svg>
  );
}

// Corner spider web, generated so the threads stay even
export function Web({ size = 220, ...rest }) {
  const spokes = [0, 18, 36, 54, 72, 90].map((d) => (d * Math.PI) / 180);
  const pt = (r, a) => [r * Math.cos(a), r * Math.sin(a)];
  const rings = [40, 78, 118, 160, 200].map((r) => {
    let d = '';
    spokes.forEach((a, i) => {
      const [x, y] = pt(r, a);
      if (i === 0) { d += `M${x} ${y}`; return; }
      const [cx, cy] = pt(r * 0.86, (a + spokes[i - 1]) / 2);
      d += `Q${cx} ${cy} ${x} ${y}`;
    });
    return d;
  });
  return (
    <Svg size={size} viewBox="0 0 200 200" {...rest}>
      <g stroke="currentColor" strokeWidth="0.9">
        {spokes.map((a, i) => {
          const [x, y] = pt(285, a);
          return <path key={i} d={`M0 0L${x} ${y}`} />;
        })}
        {rings.map((d) => <path key={d} d={d} />)}
      </g>
    </Svg>
  );
}

/* ---------- Project sigils ---------- */

// CP-Focus: an eyeball that never stops watching
export function Eyeball({ size = 64, ...rest }) {
  return (
    <Svg size={size} {...rest}>
      <circle cx="32" cy="32" r="27" fill="var(--bone)" />
      <path d="M6 30c5 1 8-2 11 1M58 34c-5-1-7 3-11 0M16 12c3 4 3 7 7 9M49 52c-3-4-2-7-6-9M50 12c-2 4-5 5-6 9M14 52c3-3 3-6 7-8" stroke="var(--blood)" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="32" cy="32" r="13" fill="var(--ember)" />
      <ellipse cx="32" cy="32" rx="3.4" ry="11" fill="#08060c" />
    </Svg>
  );
}

// FuelQ: a fuel pump haunting the queue
export function PumpGhost({ size = 64, ...rest }) {
  return (
    <Svg size={size} {...rest}>
      <path
        d="M12 56V16c0-6 4-10 10-10h8c6 0 10 4 10 10v40l-5-4-5 4-4-4-5 4-4-4z"
        fill="currentColor"
      />
      <path d="M40 22l8 7v18c0 6 8 6 8 0V24l-7-8" {...stroke} />
      <path d="M19 22l6 4-6 3zM33 22l-6 4 6 3z" fill="var(--ember)" />
      <path d="M21 38c2 4 8 4 10 0-2 8-8 8-10 0z" fill="var(--ember)" />
    </Svg>
  );
}

// Inventory: a cauldron that holds the stock
export function Cauldron({ size = 64, ...rest }) {
  return (
    <Svg size={size} {...rest}>
      <circle cx="24" cy="10" r="4" fill="var(--slime)" />
      <circle cx="38" cy="6" r="2.6" fill="var(--slime)" />
      <circle cx="42" cy="16" r="3.2" fill="var(--slime)" />
      <path d="M12 22h40c3 0 3 7 0 7H12c-3 0-3-7 0-7z" fill="var(--slime)" />
      <path d="M12 29h40c7 8 6 20-3 26H15C6 49 5 37 12 29z" fill="currentColor" />
      <path d="M16 55l-4 7M48 55l4 7" {...stroke} />
    </Svg>
  );
}

// Fintech reviews: a skull on a gold coin
export function SkullCoin({ size = 64, ...rest }) {
  return (
    <Svg size={size} {...rest}>
      <circle cx="32" cy="32" r="28" fill="currentColor" />
      <circle cx="32" cy="32" r="23" stroke="#08060c" strokeWidth="1.8" strokeDasharray="2 3" />
      <path d="M32 14c-10 0-16 7-16 15 0 6 3 10 7 12v7h18v-7c4-2 7-6 7-12 0-8-6-15-16-15z" fill="#08060c" />
      <circle cx="25" cy="29" r="4.4" fill="var(--ember)" />
      <circle cx="39" cy="29" r="4.4" fill="var(--ember)" />
      <path d="M32 33l3 5h-6zM28 43v5M32 43v5M36 43v5" fill="currentColor" stroke="currentColor" strokeWidth="1.4" />
    </Svg>
  );
}

// Section marks
export function Tombstone({ size = 64, ...rest }) {
  return (
    <Svg size={size} {...rest}>
      <path d="M14 58V26a18 18 0 0 1 36 0v32z" fill="currentColor" />
      <path d="M6 58h52" {...stroke} />
      <text x="32" y="36" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="var(--font-mono)" fill="#08060c">RIP</text>
    </Svg>
  );
}

export function Ghost({ size = 64, ...rest }) {
  return (
    <Svg size={size} {...rest}>
      <path d="M12 58V28a20 20 0 0 1 40 0v30l-7-6-6 6-7-6-7 6-6-6z" fill="currentColor" />
      <ellipse cx="25" cy="27" rx="3.6" ry="5" fill="#08060c" />
      <ellipse cx="39" cy="27" rx="3.6" ry="5" fill="#08060c" />
      <ellipse cx="32" cy="39" rx="4" ry="5" fill="#08060c" />
    </Svg>
  );
}

/* ---------- Experience sigils ---------- */

// iCog Labs: a frozen model with a learning layer woven around it
export function NeuralKnot({ size = 44, ...rest }) {
  return (
    <Svg size={size} {...rest}>
      <g {...stroke}>
        <path d="M32 10L12 30l20 24 20-24zM12 30h40M32 10v44" />
      </g>
      <circle cx="32" cy="10" r="5" fill="var(--ember)" />
      <circle cx="12" cy="30" r="5" fill="currentColor" />
      <circle cx="52" cy="30" r="5" fill="currentColor" />
      <circle cx="32" cy="54" r="5" fill="var(--ember)" />
    </Svg>
  );
}

// Football analytics: a ball being watched
export function WatchedBall({ size = 44, ...rest }) {
  return (
    <Svg size={size} {...rest}>
      <circle cx="32" cy="32" r="24" {...stroke} />
      <path d="M32 21l10 8-4 12H26l-4-12z" fill="currentColor" />
      <path d="M32 21V9M42 29l11-5M38 41l8 10M26 41l-8 10M22 29l-11-5" {...stroke} />
      <path d="M26 31l4 2-4 2zM38 31l-4 2 4 2z" fill="var(--ember)" />
    </Svg>
  );
}

// INSA: national digital ID
export function IdPrint({ size = 44, ...rest }) {
  return (
    <Svg size={size} {...rest}>
      <g {...stroke}>
        <path d="M18 50c-3-6-4-12-4-18a18 18 0 0 1 36 0c0 6-1 12-3 18" />
        <path d="M25 54c-3-7-4-15-4-22a11 11 0 0 1 22 0c0 8-1 15-3 22" />
        <path d="M32 58c-3-8-4-18-4-26a4 4 0 0 1 8 0c0 8 0 14-1 20" />
      </g>
      <circle cx="32" cy="6" r="3.4" fill="var(--ember)" />
    </Svg>
  );
}

/* ---------- Stat sigils ---------- */

export function Crowd({ size = 40, ...rest }) {
  return (
    <Svg size={size} {...rest}>
      <path d="M8 54V30a12 12 0 0 1 24 0v24l-4-4-4 4-4-4-4 4-4-4z" fill="currentColor" opacity="0.55" />
      <path d="M26 58V28a14 14 0 0 1 28 0v30l-5-5-4 5-5-5-4 5-5-5z" fill="currentColor" />
      <path d="M33 27l5 3-5 2zM47 27l-5 3 5 2z" fill="var(--ember)" />
    </Svg>
  );
}

export function Spider({ size = 40, ...rest }) {
  return (
    <Svg size={size} {...rest}>
      <path d="M32 0v20" stroke="currentColor" strokeWidth="1.4" />
      <g {...stroke}>
        <path d="M24 30L10 20 6 28M24 36L8 36 4 46M26 42L14 50 14 60M40 30l14-10 4 8M40 36l16 0 4 10M38 42l12 8 0 10" />
      </g>
      <ellipse cx="32" cy="36" rx="11" ry="14" fill="currentColor" />
      <circle cx="28" cy="30" r="2.2" fill="var(--ember)" />
      <circle cx="36" cy="30" r="2.2" fill="var(--ember)" />
    </Svg>
  );
}

export function Glyphs({ size = 40, ...rest }) {
  return (
    <Svg size={size} {...rest}>
      <path d="M22 18L8 32l14 14M42 18l14 14-14 14" {...stroke} />
      <path d="M36 12L28 52" stroke="var(--ember)" strokeWidth="3" strokeLinecap="round" />
    </Svg>
  );
}
