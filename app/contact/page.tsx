export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <p className="text-sm text-slate-300">
        The fastest way to reach me is by email or LinkedIn.
      </p>
      <ul className="space-y-2 text-sm">
        <li>
          Email:{" "}
          <a className="text-sky-400 underline" href="mailto:ghezouanmohamed02@gmail.com">
            ghezouanmohamed02@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            className="text-sky-400 underline"
            href="https://www.linkedin.com/in/mohamed-ghazouan"
            target="_blank"
            rel="noreferrer"
          >
            mohamed-ghazouan
          </a>
        </li>
        <li>
          GitHub:{" "}
          <span className="text-slate-400">
            (add URL here once your repo is ready)
          </span>
        </li>
      </ul>
    </section>
  );
}
