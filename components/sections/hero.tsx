import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <Image
        src="/images/hero-bg.png"
        alt="Cinematic gaming background"
        fill
        priority
        className="object-cover opacity-45"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 text-center md:px-10 lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-2xl">
          <Image
            src="/images/logo.PNG"
            alt="CHEST_YEAHMANN logo"
            width={180}
            height={180}
            priority
            className="mx-auto mb-6 rounded-2xl lg:mx-0"
          />

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            GTA 6 Creator • Live Streams • Clips
          </p>

          <h1 className="text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-8xl">
            CHEST_
            <span className="block text-cyan-300">YEAHMANN</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
            Cinematic gaming content, live chaos, community moments, and
            creator-driven streams built around the next era of GTA.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#stream"
              className="rounded-full bg-cyan-400 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-cyan-300"
            >
              Watch Stream
            </a>

            <a
              href="#clips"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/20"
            >
              View Clips
            </a>
          </div>
        </div>

        <div className="relative h-[360px] w-full max-w-sm sm:h-[460px] lg:h-[560px] lg:max-w-lg">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

          <Image
            src="/images/creator.png"
            alt="CHEST_YEAHMANN creator avatar"
            fill
            priority
            className="object-contain drop-shadow-[0_0_45px_rgba(34,211,238,0.45)]"
          />
        </div>
      </div>
    </section>
  );
}