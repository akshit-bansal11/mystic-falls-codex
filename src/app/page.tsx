import { MapViewport } from '@/components/codex/map-viewport'
import { CATEGORIES } from '@/data/categories'
import { CATEGORY_BY_KEY } from '@/lib/codex/category-index'
import { buildMapEdges, buildMapLayout, CANVAS_WIDTH, MAP } from '@/lib/codex/map-layout'

export default function MapPage() {
  const { bands, nodes, canvasHeight } = buildMapLayout()
  const edges = buildMapEdges(nodes)

  return (
    <>
      <h2 className="text-primary font-display text-h1">The Causal Map</h2>
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
            Causal map: {nodes.length} events across {bands.length} eras
          </title>

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

          <g fill="none">
            {edges.map((edge) => (
              <path
                key={`${edge.from}-${edge.to}`}
                d={edge.path}
                data-edge=""
                stroke="var(--border-default)"
                strokeWidth={1.25}
              />
            ))}
          </g>

          {nodes.map((node) => {
            const category = CATEGORY_BY_KEY.get(node.category)
            return (
              <a
                key={node.id}
                href={`/node/${node.id}`}
                data-strand={node.category}
                className="[&:focus-visible_rect]:stroke-[var(--border-strong)] [&:focus-visible_rect]:stroke-2 [&:hover_rect]:stroke-[var(--border-strong)]"
              >
                <rect
                  x={node.x}
                  y={node.y}
                  width={MAP.nodeWidth}
                  height={MAP.nodeHeight}
                  rx={8}
                  fill="var(--bg-surface)"
                  stroke={`var(${category?.cssVar ?? '--border-default'})`}
                  strokeWidth={1.5}
                />
                <text
                  x={node.x + 12}
                  y={node.y + 21}
                  className="fill-[var(--text-faint)] font-mono text-[10px]"
                >
                  {node.dated}
                </text>
                <text
                  x={node.x + 12}
                  y={node.y + 42}
                  className="fill-[var(--text-primary)] text-[14px]"
                >
                  {node.title.length > 26 ? `${node.title.slice(0, 25)}…` : node.title}
                </text>
                <text
                  x={node.x + 12}
                  y={node.y + 60}
                  className="fill-[var(--text-faint)] font-mono text-[10px]"
                >
                  {node.leadsTo.length} consequence{node.leadsTo.length === 1 ? '' : 's'}
                </text>
              </a>
            )
          })}
        </svg>
      </MapViewport>
    </>
  )
}
