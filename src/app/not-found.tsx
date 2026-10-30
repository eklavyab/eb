import { ArrowLink } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-end bg-ivory pt-40 pb-20">
      <div className="container-luxe">
        <p className="eyebrow text-taupe-deep">(404) — Page not found</p>
        <h1 className="display mt-8 text-[clamp(3.5rem,12vw,12rem)]">
          Lost, <span className="italic text-taupe-deep">elegantly.</span>
        </h1>
        <ArrowLink href="/" className="mt-12">
          Return Home
        </ArrowLink>
      </div>
    </section>
  );
}
