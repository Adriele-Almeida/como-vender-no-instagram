import type { Block } from "@/data/book";
import { BioTool, CheckTool, DietTool, MetricTool, SemanticTool } from "@/components/tools";

function Tool({ id }: { id: "bio" | "metric" | "semantic" | "diet" | "check" }) {
  if (id === "bio") return <BioTool />;
  if (id === "metric") return <MetricTool />;
  if (id === "semantic") return <SemanticTool />;
  if (id === "diet") return <DietTool />;
  return <CheckTool />;
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-8 grid gap-6">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        if (block.type === "p") return <p key={key}>{block.text}</p>;
        if (block.type === "h") {
          return (
            <h2 key={key} className="mt-4 font-display text-3xl leading-tight text-ink">
              {block.text}
            </h2>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={key}
              className="border-l-2 border-accent py-1 pl-5 font-display text-2xl italic leading-snug text-ink"
            >
              {block.text}
            </blockquote>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={key} className="grid gap-3 pl-0">
              {block.items.map((item) => (
                <li key={item} className="border-t border-line pt-3">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "callout") {
          return (
            <aside key={key} className="rounded-card bg-accent-soft px-5 py-5 text-ink">
              <p className="font-display text-sm text-accent">{block.kicker}</p>
              <p className="mt-2">{block.text}</p>
            </aside>
          );
        }
        if (block.type === "compare") {
          return (
            <div key={key} className="grid gap-3 sm:grid-cols-2">
              <article className="rounded-card border border-line px-4 py-4">
                <h3 className="font-display text-lg text-muted">{block.leftTitle}</h3>
                <p className="mt-2">{block.left}</p>
              </article>
              <article className="rounded-card border border-accent bg-paper px-4 py-4">
                <h3 className="font-display text-lg text-accent">{block.rightTitle}</h3>
                <p className="mt-2">{block.right}</p>
              </article>
            </div>
          );
        }
        if (block.type === "cards") {
          return (
            <div key={key} className="grid gap-3">
              {block.items.map((item) => (
                <article key={item.title} className="border-t border-line pt-4">
                  <h3 className="font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-1 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          );
        }
        return <Tool key={key} id={block.id} />;
      })}
    </div>
  );
}
