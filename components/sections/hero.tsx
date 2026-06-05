export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950 px-6 py-24 text-white sm:px-8 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/70 to-zinc-950" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-rose-400">
            Creator / Streamer
          </p>

          <h1 className="text-5xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-8xl">
            Creator Name
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Tagline placeholder for a bold creator brand, live streams,
            cinematic gaming content, and community-driven moments.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#stream"
              className="inline-flex items-center justify-center rounded-full bg-rose-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Primary CTA
            </a>

            <a
              href="#clips"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Secondary CTA
            </a>
          </div>
        </div>

        <div className="relative hidden h-[420px] w-full max-w-sm lg:block">
          <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-rose-950/30 backdrop-blur" />
          <div className="absolute inset-6 rounded-[1.5rem] border border-rose-400/20 bg-gradient-to-br from-rose-500/20 via-zinc-900 to-blue-500/10" />
          <div className="absolute bottom-10 left-10 right-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Live Status
            </p>
            <p className="mt-3 text-3xl font-black uppercase">
              Gaming Hub
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}