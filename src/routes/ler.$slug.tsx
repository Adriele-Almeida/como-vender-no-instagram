import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, List } from "lucide-react";
import { chapterIndex, chapters, getChapter } from "@/data/book";
import { Blocks } from "@/components/blocks";
import { Button } from "@/components/ui/button";
import { useReading, type FontSize } from "@/lib/reading";

export const Route = createFileRoute("/ler/$slug")({
  component: Reader,
});

const fonts: { id: FontSize; label: string }[] = [
  { id: "s", label: "A−" },
  { id: "m", label: "A" },
  { id: "l", label: "A+" },
];

function Reader() {
  const { slug } = Route.useParams();
  const chapter = getChapter(slug);
  if (!chapter) return <Missing />;
  return <ChapterView slug={chapter.slug} />;
}

function Missing() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6">
      <p className="font-display text-sm text-accent">Capítulo</p>
      <h1 className="mt-3 font-display text-4xl text-ink">Esta página não está no guia.</h1>
      <Button className="mt-8 w-fit" asChild>
        <Link to="/">Voltar ao sumário</Link>
      </Button>
    </main>
  );
}

function ChapterView({ slug }: { slug: string }) {
  const chapter = getChapter(slug)!;
  const index = chapterIndex(slug);
  const prev = index > 0 ? chapters[index - 1] : null;
  const next = index < chapters.length - 1 ? chapters[index + 1] : null;
  const reading = useReading();
  const navigate = useNavigate();
  const [toc, setToc] = useState(false);

  useEffect(() => {
    document.title = `${chapter.title} — Como vender no Instagram`;
    reading.visit(slug);
    window.scrollTo(0, 0);
    return () => {
      document.title = "Como vender no Instagram";
    };
    // visit identity is stable enough; we only want this on chapter change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, chapter.title]);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      if (max <= 0 || el.scrollTop / max > 0.72) reading.markSeen(slug);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug, reading]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      if (event.key === "ArrowRight" && next) {
        void navigate({ to: "/ler/$slug", params: { slug: next.slug } });
      }
      if (event.key === "ArrowLeft" && prev) {
        void navigate({ to: "/ler/$slug", params: { slug: prev.slug } });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, next, prev]);

  const progress = ((index + 1) / chapters.length) * 100;

  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-line" aria-hidden="true">
        <div className="h-full origin-left bg-accent" style={{ transform: `scaleX(${progress / 100})` }} />
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-2xl items-center gap-2 px-4">
          <Button variant="ghost" className="px-3" asChild>
            <Link to="/" aria-label="Voltar ao sumário">
              <ArrowLeft aria-hidden="true" className="size-4" />
              <span className="hidden sm:inline">Sumário</span>
            </Link>
          </Button>
          <p className="min-w-0 flex-1 truncate text-center text-sm text-muted tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
          </p>
          <div className="flex items-center" role="group" aria-label="Tamanho do texto">
            {fonts.map((font) => (
              <button
                key={font.id}
                type="button"
                aria-pressed={reading.font === font.id}
                onClick={() => reading.setFont(font.id)}
                className={`min-h-11 min-w-10 px-2 font-display ${
                  reading.font === font.id ? "text-accent" : "text-muted"
                }`}
              >
                {font.label}
              </button>
            ))}
          </div>
          <Button variant="ghost" className="px-3" onClick={() => setToc(true)} aria-label="Abrir capítulos">
            <List aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </header>

      <article className="reading mx-auto w-full max-w-2xl px-5 pt-10 pb-28" data-size={reading.font}>
        <p className="font-display text-sm tracking-wide text-accent">{chapter.kicker}</p>
        <p className="mt-3 text-sm text-muted">
          {chapter.minutes} min de leitura
          {reading.seen.includes(slug) ? " · lido" : ""}
        </p>
        <h1 className="mt-3 font-display text-4xl leading-[1.05] font-medium text-ink sm:text-5xl">
          {chapter.title}
        </h1>
        <p className="mt-6 text-xl leading-snug italic">{chapter.lead}</p>
        <Blocks blocks={chapter.blocks} />

        <nav className="mt-14 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
          {prev ? (
            <Link
              to="/ler/$slug"
              params={{ slug: prev.slug }}
              className="flex min-h-16 flex-col justify-center rounded-card border border-line px-4 py-3 hover:border-ink"
            >
              <span className="text-sm text-muted">Anterior</span>
              <span className="font-display text-lg text-ink">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/ler/$slug"
              params={{ slug: next.slug }}
              className="flex min-h-16 flex-col justify-center rounded-card bg-ink px-4 py-3 text-paper hover:bg-accent sm:text-right"
            >
              <span className="text-sm text-cover-muted">Próximo</span>
              <span className="font-display text-lg">{next.title}</span>
            </Link>
          ) : (
            <Link
              to="/"
              className="flex min-h-16 flex-col justify-center rounded-card bg-accent px-4 py-3 text-on-accent sm:text-right"
            >
              <span className="text-sm">Fim do guia</span>
              <span className="font-display text-lg">Voltar ao sumário</span>
            </Link>
          )}
        </nav>
        <p className="mt-6 hidden text-sm text-muted md:block">As setas do teclado também viram a página.</p>
      </article>

      <Dialog.Root open={toc} onOpenChange={setToc}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40" />
          <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-paper text-ink shadow-none outline-none">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <Dialog.Title className="font-display text-2xl">Capítulos</Dialog.Title>
              <Dialog.Close className="min-h-11 px-3 text-muted">Fechar</Dialog.Close>
            </div>
            <Dialog.Description className="sr-only">Lista de capítulos do guia.</Dialog.Description>
            <ol className="flex-1 overflow-y-auto px-5 py-2">
              {chapters.map((item, itemIndex) => (
                <li key={item.slug} className="border-b border-line">
                  <Link
                    to="/ler/$slug"
                    params={{ slug: item.slug }}
                    onClick={() => setToc(false)}
                    className="flex min-h-14 items-center gap-3 py-3"
                  >
                    <span className="w-8 font-display text-accent tabular-nums">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span className={item.slug === slug ? "font-display text-lg text-accent" : "text-ink"}>
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
}
