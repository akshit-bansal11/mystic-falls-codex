import { MapViewport } from '@/components/codex/map-viewport'
import { CATEGORIES } from '@/data/categories'
import { buildMapEdges, buildMapLayout, CANVAS_WIDTH, MAP, wrapLabel } from '@/lib/codex/map-layout'

export default function MapPage() {
  const { bands, nodes, canvasHeight } = buildMapLayout()
  const edges = buildMapEdges(nodes)

  return (
    <>
      <h2 className="text-primary font-display text-h1">The Map</h2>
      <p className="text-muted mt-2 mb-6 max-w-2xl text-lead">
        Eighty events across seven eras, each linked to what caused it and what it caused. The
        franchise tells this out of order across 331 episodes; here it is as one shape.
      </p>

      <MapViewport categories={CATEGORIES} canvasWidth={CANVAS_WIDTH} canvasHeight={canvasHeight}>
        <svg
          viewBox={`0 0 ${CANVAS_WIDTH} ${canvasHeight}`}
          width={CANVAS_WIDTH}
          height={canvasHeight}
          aria-labelledby="causal-map-title"
          className="block"
        >
          <title id="causal-map-title">
            Causal map: {nodes.length} events across {bands.length} eras, {edges.length} causal
            links
          </title>

          <defs>
            {/* Two markers rather than one: an arrowhead cannot inherit the
                stroke of the path it caps across a state change, so the
                highlighted edge swaps to its own marker. */}
            <marker
              id="arrow"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0 1 L7 4 L0 7 z" fill="var(--border-default)" />
            </marker>
            <marker
              id="arrow-active"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M0 1 L7 4 L0 7 z" fill="var(--accent)" />
            </marker>
          </defs>

          {bands.map((band, index) => (
            <g key={band.era.num}>
              {index > 0 ? (
                <line
                  x1={14}
                  y1={band.top}
                  x2={CANVAS_WIDTH - 20}
                  y2={band.top}
                  stroke="var(--border-subtle)"
                  strokeWidth={1}
                />
              ) : null}
              <text
                x={20}
                y={band.top + 31}
                className="fill-[var(--text-faint)] font-mono text-[11px] tracking-wider"
              >
                Era {band.era.num}
              </text>
              <text x={66} y={band.top + 30} className="fill-[var(--text-primary)] text-[15px]">
                {band.era.name}
              </text>
              <text
                x={66}
                y={band.top + 46}
                className="fill-[var(--text-faint)] font-mono text-[10px]"
              >
                {band.era.when}
              </text>
            </g>
          ))}

          {/* Paths are drawn first so they sit behind the boxes, and are
              deliberately lighter and thinner than any node edge: a connection
              should never read as the outline of a thing. */}
          <g fill="none">
            {edges.map((edge) => (
              <path
                key={`${edge.from}-${edge.to}`}
                d={edge.path}
                data-edge=""
                data-from={edge.from}
                data-to={edge.to}
                stroke="var(--border-default)"
                strokeWidth={1}
                markerEnd="url(#arrow)"
              />
            ))}
          </g>

          {nodes.map((node) => {
            const lines = wrapLabel(node.title, 26, 2)
            return (
              <a
                key={node.id}
                href={`/node/${node.id}`}
                data-node={node.id}
                data-strand={node.category}
                className="[&:focus-visible_rect]:stroke-[var(--border-strong)] [&:focus-visible_rect]:stroke-2 [&:hover_rect]:stroke-[var(--border-strong)]"
              >
                <rect
                  x={node.x}
                  y={node.y}
                  width={MAP.nodeWidth}
                  height={MAP.nodeHeight}
                  rx={2}
                  fill="var(--bg-surface)"
                  stroke="var(--border-default)"
                  strokeWidth={1.5}
                />
                <text
                  x={node.x + 13}
                  y={node.y + 19}
                  className="fill-[var(--text-faint)] font-mono text-[9px] tracking-[0.08em]"
                >
                  {node.dated}
                </text>
                {lines.map((line, index) => (
                  <text
                    key={line}
                    x={node.x + 13}
                    y={node.y + (lines.length === 1 ? 46 : 40 + index * 16)}
                    className="fill-[var(--text-primary)] text-[13.4px] font-semibold"
                  >
                    {line}
                  </text>
                ))}
              </a>
            )
          })}
        </svg>
      </MapViewport>
    </>
  )
}
