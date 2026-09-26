import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { book, chapters, totalMinutes } from "@/data/book";
import { useReading } from "@/lib/reading";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Cover,
});

function Cover() {
  const reading = useReading();
  const seen = chapters.filter((chapter) => reading.seen.includes(chapter.slug)).length;
  const resume = chapters.find((chapter) => chapter.slug === reading.lastSlug) ?? chapters[0];
  const started = Boolean(reading.lastSlug);

  return (
    <main className="min-h-dvh bg-paper text-ink lg:grid lg:h-dvh lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:overflow-hidden">
      <section className="flex min-h-dvh flex-col bg-cover px-6 py-10 text-cover-fg sm:px-10 lg:h-full lg:min-h-0 lg:px-12 lg:py-12">
        <p className="font-display text-sm tracking-widest text-cover-muted uppercase">
          Guia prático · {book.season}
        </p>
        <div className="mt-10 max-w-xl lg:mt-16">
          <h1 className="font-display text-5xl leading-[0.95] font-medium text-cover-fg sm:text-7xl">
            Como vender
            <span className="mt-2 block italic text-accent">no Instagram</span>
          </h1>
          <p className="mt-6 max-w-md text-xl leading-snug text-cover-muted">{book.dek}</p>
        </div>
        <div className="mt-8 h-px w-16 bg-accent" />
        <p className="mt-6 font-display text-2xl text-cover-fg">{book.author}</p>
        <p className="text-cover-muted">{book.role}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="cover" asChild>
            <Link to="/ler/$slug" params={{ slug: resume.slug }}>
              {started ? "Continuar a leitura" : "Abrir o guia"}
            </Link>
          </Button>
          <Button variant="coverGhost" asChild>
            <a
              href="https://www.instagram.com/adrielealmeida.estrategista/"
              target="_blank"
              rel="noreferrer"
            >
              Perfil da autora
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </Button>
        </div>
        <p className="mt-auto pt-12 text-sm text-cover-muted">
          {chapters.length} capítulos · {totalMinutes} min
          {reading.ready && seen > 0 ? ` · ${seen} lidos neste aparelho` : ""}
        </p>
      </section>

      <section className="px-6 py-10 sm:px-10 lg:h-full lg:overflow-y-auto lg:px-12 lg:py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-ink">Sumário</h2>
          <p className="text-sm text-muted">
            {seen > 0 ? `${seen} de ${chapters.length}` : "Comece pelo primeiro"}
          </p>
        </div>
        <ol className="mt-6">
          {chapters.map((chapter, index) => {
            const read = reading.seen.includes(chapter.slug);
            return (
              <li key={chapter.slug} className="border-t border-line">
                <Link
                  to="/ler/$slug"
                  params={{ slug: chapter.slug }}
                  className="group flex min-h-16 items-center gap-4 py-4"
                >
                  <span className="w-8 shrink-0 font-display text-lg text-accent tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl leading-tight text-ink group-hover:text-accent">
                      {chapter.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {chapter.kicker} · {chapter.minutes} min
                    </span>
                  </span>
                  <span
                    className={`size-2 shrink-0 rounded-full ${read ? "bg-accent" : "bg-line"}`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ol>
        <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
          Editado a partir da transcrição de Adriele Almeida. Os exemplos — imobiliária, Barreiro,
          bairro Milionários — são os do próprio método, para você aplicar no seu negócio.
        </p>
      </section>
    </main>
  );
}
