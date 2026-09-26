import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const KEY = "cvi-reading-v1";

export type FontSize = "s" | "m" | "l";

type ReadingState = {
  lastSlug: string | null;
  seen: string[];
  font: FontSize;
};

type ReadingApi = ReadingState & {
  ready: boolean;
  visit: (slug: string) => void;
  markSeen: (slug: string) => void;
  setFont: (font: FontSize) => void;
};

const DEFAULTS: ReadingState = { lastSlug: null, seen: [], font: "m" };

const ReadingContext = createContext<ReadingApi | null>(null);

function load(): ReadingState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULTS;
    const parsed = JSON.parse(raw) as Partial<ReadingState>;
    const font = parsed.font === "s" || parsed.font === "l" ? parsed.font : "m";
    return {
      lastSlug: typeof parsed.lastSlug === "string" ? parsed.lastSlug : null,
      seen: Array.isArray(parsed.seen) ? parsed.seen.filter((s) => typeof s === "string") : [],
      font,
    };
  } catch {
    return DEFAULTS;
  }
}

export function ReadingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ReadingState>(DEFAULTS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(load());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(state));
  }, [state, ready]);

  const api = useMemo<ReadingApi>(
    () => ({
      ...state,
      ready,
      visit: (slug) => setState((s) => ({ ...s, lastSlug: slug })),
      markSeen: (slug) =>
        setState((s) => (s.seen.includes(slug) ? s : { ...s, seen: [...s.seen, slug] })),
      setFont: (font) => setState((s) => ({ ...s, font })),
    }),
    [state, ready],
  );

  return <ReadingContext.Provider value={api}>{children}</ReadingContext.Provider>;
}

export function useReading() {
  const ctx = useContext(ReadingContext);
  if (!ctx) throw new Error("useReading fora do ReadingProvider");
  return ctx;
}
