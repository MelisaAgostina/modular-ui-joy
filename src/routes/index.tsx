import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/siftpipe-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SiftPipe — Hybrid security pipeline" },
      { name: "description", content: "SiftPipe runs a hybrid AI + human security pipeline on live apps: static analysis, dynamic discovery, contextual payloads, and correlated results." },
      { property: "og:title", content: "SiftPipe — Hybrid security pipeline" },
      { property: "og:description", content: "Hybrid AI + human security pipeline: from static analysis to correlated, confirmed findings." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <section className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <img
          src={logo}
          alt="SiftPipe logo"
          className="mb-4 h-64 w-auto select-none invert dark:invert-0"
          draggable={false}
        />

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          SiftPipe
        </h1>
        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Hybrid security pipeline
        </p>

        <p className="mt-8 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          SiftPipe combines AI-driven static analysis, dynamic discovery with
          Playwright, and contextual payload generation — then waits for a human
          to validate before attacking. Every finding is correlated, confirmed,
          and free of noise.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/app"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Open the pipeline
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

      </section>

      <footer className="relative z-10 mt-16 text-xs text-muted-foreground">
        Running live on Mattermost · hybrid AI + human review
      </footer>
    </main>
  );
}
