import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { ReadingProvider } from "@/lib/reading";
import appCss from "../styles.css?url";

const APP_NAME = "Como vender no Instagram";

const base = import.meta.env.BASE_URL;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Guia prático de Adriele Almeida para vender no Instagram no segundo semestre de 2026. Intencionalidade, semântica e marketing invisível.",
      },
      { name: "theme-color", content: "#221812" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: `${base}favicon.svg` },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: `${base}__grok/manifest.webmanifest` },
      { rel: "apple-touch-icon", href: `${base}__grok/icon-180.png` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500..700;1,9..144,500..700&family=Newsreader:ital,opsz,wght@0,6..72,400..650;1,6..72,400..600&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="pt-BR" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <ReadingProvider>
            <Outlet />
          </ReadingProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
