import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext } from "@tanstack/react-router";
import { HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import appCss from "../styles.css?url";
import { op } from "#/lib/openpanel";
export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title:
          "BingeWave - Watch Everything in One Place - Movies & TV Shows & Anime & Drama & Shorts",
      },
      {
        name: "description",
        content:
          "Why switch between apps when you can have it all in one place? BingeWave lets you explore movies, TV shows, anime, dramas, and shorts in a single, easy-to-use platform. Whether you're in the mood for a quick watch or a full-on binge session, BingeWave has something for every moment.",
      },
      {
        name: "keywords",
        content:
          "movies, tv shows, anime, dramas, shorts, streaming,bingewave, binge wave, online sa prevodom, prevod, sa prevodom, binge-watching, entertainment, movies online, watch TV shows, anime streaming, drama series, watch movies app, streaming app, free movies, binge watch, HD streaming, short videos, entertainment app",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
