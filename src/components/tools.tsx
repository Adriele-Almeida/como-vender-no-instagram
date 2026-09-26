import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROMPT =
  "Segue em anexo uma imagem que vou postar no meu Instagram. Quero que você leia o conteúdo, entenda o contexto e então crie uma legenda estratégica aplicando a técnica da semântica com Social SEO.";

function ToolFrame({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-2 rounded-card border border-line bg-paper-2 px-5 py-6 sm:px-6">
      <p className="font-display text-sm tracking-wide text-accent">{kicker}</p>
      <h3 className="mt-2 font-display text-2xl leading-tight text-ink">{title}</h3>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function useLocalText(key: string, initial: string) {
  const [value, setValue] = useState(initial);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored !== null) setValue(stored);
    setReady(true);
  }, [key]);

  useEffect(() => {
    if (ready) localStorage.setItem(key, value);
  }, [key, ready, value]);

  return [value, setValue] as const;
}

export function BioTool() {
  const [who, setWho] = useLocalText("cvi-bio-who", "Imobiliária no Barreiro");
  const [what, setWhat] = useLocalText("cvi-bio-what", "Ajudo famílias a saírem do aluguel");
  const [whom, setWhom] = useLocalText("cvi-bio-whom", "Casais com filho pequeno");
  const [phase, setPhase] = useState<"idle" | "live" | "ask">("idle");

  useEffect(() => {
    if (phase !== "live") return;
    const timer = window.setTimeout(() => setPhase("ask"), 3000);
    return () => window.clearTimeout(timer);
  }, [phase]);

  return (
    <ToolFrame kicker="Prática" title="Escreva a bio e teste os três segundos">
      <div className="grid gap-4">
        <label className="block text-sm text-muted">
          Quem você é
          <input className="field" value={who} onChange={(e) => setWho(e.target.value)} />
        </label>
        <label className="block text-sm text-muted">
          O que você faz
          <input className="field" value={what} onChange={(e) => setWhat(e.target.value)} />
        </label>
        <label className="block text-sm text-muted">
          Para quem você faz
          <input className="field" value={whom} onChange={(e) => setWhom(e.target.value)} />
        </label>
      </div>

      <div className="mt-6 rounded-card border border-line bg-paper px-5 py-5">
        <p className="text-sm text-muted">Prévia da bio</p>
        {phase === "ask" ? (
          <div className="mt-3">
            <p className="font-display text-xl text-ink">O que ficou?</p>
            <p className="mt-2 text-muted">
              Sem olhar de novo: você saberia dizer quem é, o que faz e para quem faz? Se travou, a frase ainda está longa demais.
            </p>
          </div>
        ) : (
          <div className="mt-3 space-y-1 text-lg text-ink">
            <p>{who || "—"}</p>
            <p>{what || "—"}</p>
            <p className="text-muted">{whom || "—"}</p>
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Button onClick={() => setPhase("live")}>Testar 3 segundos</Button>
        {phase !== "idle" ? (
          <Button variant="line" onClick={() => setPhase("idle")}>
            Ver a bio de novo
          </Button>
        ) : null}
      </div>
    </ToolFrame>
  );
}

export function MetricTool() {
  const [views, setViews] = useLocalText("cvi-views", "10000");
  const [interactions, setInteractions] = useLocalText("cvi-interactions", "20");
  const v = Number(views.replace(/\D/g, "")) || 0;
  const i = Number(interactions.replace(/\D/g, "")) || 0;
  const perThousand = v > 0 ? (i / v) * 1000 : 0;

  let reading =
    "Preencha os dois números do post. O guia não pede vaidade: pede a relação entre ver e interagir.";
  if (v > 0) {
    if (perThousand < 5) {
      reading =
        "Relevância baixa, no espírito do exemplo do guia: dez mil visualizações e vinte interações são duas a cada mil. O alcance não está virando conversa, salvamento ou direct.";
    } else if (perThousand < 25) {
      reading =
        "Há sinal, mas o critério continua sendo a qualidade da interação. Repita o que gera comentário, salvamento e direct — não o que só é visto.";
    } else {
      reading =
        "Interação forte. No método, esse é o conteúdo para repetir: quando a pessoa para de verdade, as visualizações tendem a subir depois.";
    }
  }

  return (
    <ToolFrame kicker="Prática" title="Compare visualização e interação">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-muted">
          Visualizações
          <input
            className="field tabular-nums"
            inputMode="numeric"
            value={views}
            onChange={(e) => setViews(e.target.value.replace(/[^\d]/g, ""))}
          />
        </label>
        <label className="block text-sm text-muted">
          Interações
          <input
            className="field tabular-nums"
            inputMode="numeric"
            value={interactions}
            onChange={(e) => setInteractions(e.target.value.replace(/[^\d]/g, ""))}
          />
        </label>
      </div>
      <p className="mt-6 font-display text-4xl tabular-nums leading-none text-ink">
        {v > 0 ? perThousand.toLocaleString("pt-BR", { maximumFractionDigits: 1 }) : "—"}
      </p>
      <p className="mt-2 text-sm text-muted">interações a cada mil visualizações</p>
      <p className="mt-4 text-ink">{reading}</p>
    </ToolFrame>
  );
}

export function SemanticTool() {
  const [keyword, setKeyword] = useLocalText("cvi-key", "apartamento no bairro Milionários");
  const [who, setWho] = useLocalText("cvi-sem-who", "está procurando apartamento para comprar");
  const [need, setNeed] = useLocalText("cvi-sem-need", "precisa de acesso fácil");
  const [copied, setCopied] = useState(false);

  const line = `Você que ${who.trim() || "…"}: ${keyword.trim() || "…"} é uma opção para quem ${need.trim() || "…"}.`;

  return (
    <ToolFrame kicker="Prática" title="Coloque a palavra dentro de uma frase">
      <div className="grid gap-4">
        <label className="block text-sm text-muted">
          Palavra-chave
          <input className="field" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        </label>
        <label className="block text-sm text-muted">
          O que a pessoa está fazendo
          <input className="field" value={who} onChange={(e) => setWho(e.target.value)} />
        </label>
        <label className="block text-sm text-muted">
          O que ela precisa
          <input className="field" value={need} onChange={(e) => setNeed(e.target.value)} />
        </label>
      </div>
      <blockquote className="mt-6 border-l-2 border-accent pl-4 font-display text-xl italic leading-snug text-ink">
        {line}
      </blockquote>
      <p className="mt-6 text-sm text-muted">
        Prompt publicado no perfil da Adriele, para usar com a imagem do post em qualquer inteligência artificial:
      </p>
      <p className="mt-2 text-ink">{PROMPT}</p>
      <Button
        className="mt-4"
        variant="line"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(PROMPT);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
          } catch {
            setCopied(false);
          }
        }}
      >
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        {copied ? "Prompt copiado" : "Copiar prompt"}
      </Button>
    </ToolFrame>
  );
}

const diet = [
  {
    title: "Stories",
    role: "Confiança",
    text: "Trazem as pessoas mais qualificadas. São o lugar da conexão genuína e da confiança, no ritmo das vinte e quatro horas.",
  },
  {
    title: "Reels",
    role: "Descoberta",
    text: "Apresentam você a quem ainda não te segue. Aqui a constância importa — com intenção, não com volume cego.",
  },
  {
    title: "Carrossel",
    role: "Autoridade",
    text: "Aprofunda. Entrega conteúdo útil, de graça, que a pessoa precisa salvar e encaminhar para alguém.",
  },
  {
    title: "Imagem fixa",
    role: "Leitura",
    text: "Também entra na dieta. O algoritmo lê o que está escrito na imagem, não só o que está na legenda.",
  },
];

export function DietTool() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {diet.map((item) => (
        <article key={item.title} className="rounded-card border border-line bg-paper px-4 py-4">
          <p className="font-display text-sm text-accent">{item.role}</p>
          <h3 className="mt-1 font-display text-xl text-ink">{item.title}</h3>
          <p className="mt-2 text-muted">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

const checks = [
  { id: "bio", label: "A bio responde quem sou, o que faço e para quem faço." },
  { id: "pilares", label: "O perfil mostra autoridade, conexão e confiança." },
  { id: "publico", label: "Estou falando com um público por vez, pela dor dele." },
  { id: "dieta", label: "Tenho stories, reels e carrossel — não um formato só." },
  { id: "semantica", label: "A palavra-chave está dentro de uma narrativa." },
  { id: "humano", label: "O conteúdo parece gente, não plástico." },
  { id: "destaques", label: "Os destaques estão limpos: quem sou, resultados, bastidores." },
];

export function CheckTool() {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cvi-checks");
      if (raw) setOn(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignora armazenamento quebrado */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem("cvi-checks", JSON.stringify(on));
  }, [on, ready]);

  const done = checks.filter((item) => on[item.id]).length;

  return (
    <ToolFrame kicker="Prática" title="O perfil está pronto para vender?">
      <ul className="grid gap-2">
        {checks.map((item) => {
          const active = Boolean(on[item.id]);
          return (
            <li key={item.id}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => setOn((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                className="flex w-full items-start gap-3 rounded-2xl border border-line bg-paper px-4 py-3 text-left text-ink hover:border-ink"
              >
                <span
                  className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border ${
                    active ? "border-accent bg-accent text-on-accent" : "border-line text-transparent"
                  }`}
                  aria-hidden="true"
                >
                  <Check className="size-3.5" />
                </span>
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 tabular-nums text-sm text-muted">
        {done} de {checks.length} no lugar. Isso fica salvo neste aparelho.
      </p>
    </ToolFrame>
  );
}
