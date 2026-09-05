/**
 * The book itself: boards, spine, page block, rusted furniture.
 *
 * Server-rendered and inert. It draws no text and holds no state - the leaves
 * that carry the prose are HTML positioned over it by `CodexBook`, because SVG
 * has no line wrapping and forty pages of reflowing prose cannot have their
 * line breaks computed server-side.
 *
 * The geometry is load-bearing, not decoration. Everything is authored in a
 * 1600x1000 viewBox and the stage is locked to that aspect ratio, so the
 * percentages the leaves are positioned with land exactly on the page
 * rectangles drawn here:
 *
 *     spine        x = 800          50%
 *     verso page   x = 100 .. 800   6.25% .. 50%
 *     recto page   x = 800 .. 1500  50% .. 93.75%
 *     page block   y = 60 .. 940    6% .. 94%
 *
 * The two pages meet at the spine rather than leaving a gutter between them,
 * so a leaf rotated 180 degrees about its own left edge lands exactly on the
 * verso. A gutter here would show as a leaf that drifts as it turns.
 */
export function BookPlate() {
  return (
    <svg
      viewBox="0 0 1600 1000"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Roughness is one turbulence field reused at three scales rather than
            three different noises: one grain means the boards, the paper and
            the deckle read as the same object under the same light. */}
        <filter id="book-rough" x="-6%" y="-6%" width="112%" height="112%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.028"
            numOctaves="4"
            seed="11"
            result="rough"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="rough"
            scale="16"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <filter id="book-deckle" x="-4%" y="-4%" width="108%" height="108%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.09"
            numOctaves="5"
            seed="23"
            result="fray"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="fray"
            scale="9"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Grain is painted, not displaced: a displacement on the paper would
            drag the page edges with it. */}
        <filter id="book-grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="5" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.32" />
          </feComponentTransfer>
        </filter>

        {/* Corrosion: low-frequency blotches, hard-edged by the alpha ramp, so
            the metal reads as pitted rather than airbrushed. */}
        <filter id="book-corrosion" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="5" seed="31" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 0 0.35 0.6 0.85 1" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>

        <linearGradient id="book-board" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor="#3a241c" />
          <stop offset="42%" stopColor="#2a1712" />
          <stop offset="100%" stopColor="#170d0a" />
        </linearGradient>

        <linearGradient id="book-rust" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#9a5a2c" />
          <stop offset="38%" stopColor="#7d3f1c" />
          <stop offset="72%" stopColor="#5d2c14" />
          <stop offset="100%" stopColor="#42200f" />
        </linearGradient>

        <linearGradient id="book-paper" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#efe3cc" />
          <stop offset="55%" stopColor="#e6d8bd" />
          <stop offset="100%" stopColor="#d8c7a6" />
        </linearGradient>

        {/* The gutter. Two stops either side of the spine and none in the
            middle, so the fold darkens toward x=800 from both directions. */}
        <linearGradient id="book-gutter" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="42%" stopColor="#000" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#000" stopOpacity="0.55" />
          <stop offset="58%" stopColor="#000" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="book-foxing" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#8a6a3a" stopOpacity="0.30" />
          <stop offset="60%" stopColor="#8a6a3a" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#8a6a3a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ---- the boards ---------------------------------------------------- */}
      <g filter="url(#book-rough)">
        <rect x="34" y="24" width="1532" height="952" rx="16" fill="url(#book-board)" />
        {/* A blind-tooled rule inset from the board edge, the way a bound cover
            is finished. Barely visible, and its absence is felt. */}
        <rect
          x="62"
          y="52"
          width="1476"
          height="896"
          rx="10"
          fill="none"
          stroke="#5a3a2a"
          strokeOpacity="0.5"
          strokeWidth="3"
        />
      </g>

      {/* ---- the page block ------------------------------------------------ */}
      <g filter="url(#book-deckle)">
        <rect x="100" y="60" width="1400" height="880" fill="url(#book-paper)" />
      </g>

      {/* The stacked edges of the leaves underneath, drawn as hairlines that
          crowd toward the fore-edge. Without them the page block reads as one
          sheet of card rather than as several hundred leaves. */}
      <g stroke="#b9a582" strokeOpacity="0.55" strokeWidth="1.4">
        {Array.from({ length: 22 }, (_, index) => {
          const inset = index * 1.9 + index ** 1.4 * 0.5
          return (
            <g key={inset}>
              <line
                x1={100 + inset}
                y1={64 + index * 0.9}
                x2={100 + inset}
                y2={936 - index * 0.9}
              />
              <line
                x1={1500 - inset}
                y1={64 + index * 0.9}
                x2={1500 - inset}
                y2={936 - index * 0.9}
              />
            </g>
          )
        })}
      </g>

      {/* Age, painted on: foxing at the corners where a thumb has been for two
          hundred years, then grain over the whole block. */}
      <g>
        <ellipse cx="240" cy="880" rx="150" ry="90" fill="url(#book-foxing)" />
        <ellipse cx="1360" cy="150" rx="180" ry="110" fill="url(#book-foxing)" />
        <ellipse cx="1310" cy="860" rx="130" ry="80" fill="url(#book-foxing)" />
      </g>
      <rect
        x="100"
        y="60"
        width="1400"
        height="880"
        filter="url(#book-grain)"
        opacity="0.5"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* ---- the gutter ---------------------------------------------------- */}
      <rect x="620" y="60" width="360" height="880" fill="url(#book-gutter)" />

      {/* ---- rusted furniture ---------------------------------------------- */}
      <g>
        {/* Corner bosses. Each is a plate with a pin, so it reads as fixed to
            the board rather than printed on it. */}
        {[
          [70, 60, 1],
          [1530, 60, -1],
          [70, 940, 1],
          [1530, 940, -1],
        ].map(([x, y, dir]) => (
          <g key={`${x}-${y}`}>
            <path
              d={`M${x} ${y - 4} h${dir * 96} l${dir * -34} 34 h${dir * -62} z`}
              fill="url(#book-rust)"
              transform={y > 500 ? `rotate(180 ${x} ${y})` : undefined}
            />
            <circle cx={x + dir * 30} cy={y > 500 ? y - 16 : y + 16} r="7" fill="#2a1409" />
            <circle cx={x + dir * 30} cy={y > 500 ? y - 18 : y + 14} r="4" fill="#a4632f" />
          </g>
        ))}

        {/* The clasp, crossing the fore-edge of the recto the way a strap-and-
            pin binding closes. Broken open, which is why the book can be read. */}
        <g>
          <rect x="1476" y="420" width="104" height="160" rx="8" fill="url(#book-rust)" />
          <rect x="1496" y="452" width="64" height="96" rx="5" fill="#2a1409" opacity="0.55" />
          <circle cx="1528" cy="500" r="16" fill="#8a4a24" />
          <circle cx="1528" cy="500" r="7" fill="#241008" />
        </g>

        <rect
          x="34"
          y="24"
          width="1532"
          height="952"
          rx="16"
          fill="url(#book-rust)"
          filter="url(#book-corrosion)"
          opacity="0.22"
        />
      </g>
    </svg>
  )
}
