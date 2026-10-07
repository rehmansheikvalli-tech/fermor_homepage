import Growth from "../components/Growth";

const steps = [
  { t: "Understand", d: "Bring your accounts, investments and loans into one view. Every figure comes with a sentence explaining what it means for you." },
  { t: "Act", d: "See the next sensible move, such as clearing a costly loan or starting a monthly investment, and do it without leaving the page." },
  { t: "Grow", d: "Track progress against goals you set. Fermor adjusts the plan as your income and life change." },
];

const people = [
  { who: "First salary, first questions", what: "You earn now and nobody taught you what to do with it. Fermor starts from zero and never assumes you know the terms." },
  { who: "Busy, and money is scattered", what: "Savings here, a fund there, a loan somewhere else. See the whole picture in one minute instead of one weekend." },
  { who: "Planning something big", what: "A home, a child's education, an early break. Turn the goal into a monthly number you can actually commit to." },
];

const faqs = [
  ["Is Fermor for people who already invest?", "Yes. If you already invest, Fermor shows how your holdings fit together. If you don't, it helps you start small and learn as you go."],
  ["Will I need to learn finance first?", "No. Fermor explains each number in plain language beside it, so the learning happens while you use it."],
  ["How is my data handled?", "Your data is yours. It is used to build your view and nothing else, and you can remove it whenever you like."],
  ["Does it cost anything to start?", "Looking around and building your first plan is free. Details of paid features will be shown clearly before you ever choose them."],
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo" aria-label="Fermor home">fermor</a>
        <nav aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#who">Who it's for</a>
          <a href="#faq">Questions</a>
        </nav>
        <a href="#start" className="btn small">Get started</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <h1>Finance you can read like a sentence.</h1>
            <p className="lede">
              Fermor brings your money into one place and explains it in plain words, so you know where you stand, what to do next, and how far it can go.
            </p>
            <div className="cta-row">
              <a href="#start" className="btn">Start your plan</a>
              <a href="#try" className="textlink">Try the calculator</a>
            </div>
          </div>
          <Growth />
        </section>

        <section className="how" id="how">
          <h2>From confusing to clear in three moves</h2>
          <div className="steps">
            {steps.map((s) => (
              <article key={s.t}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="who" id="who">
          <h2>Built for people who want answers, not dashboards full of jargon</h2>
          <ul>
            {people.map((p) => (
              <li key={p.who}>
                <h3>{p.who}</h3>
                <p>{p.what}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="faq" id="faq">
          <h2>Questions people ask first</h2>
          <div>
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final" id="start">
          <h2>Your money has a story. Read it.</h2>
          <p>Join the early list and be first in when your plan is ready.</p>
          <form action="#start" className="signup">
            <label htmlFor="email" className="sr">Email address</label>
            <input id="email" type="email" required placeholder="you@example.com" />
            <button className="btn" type="submit">Join early access</button>
          </form>
        </section>
      </main>

      <footer>
        <span className="logo">fermor</span>
        <span>Illustrations are not investment advice.</span>
      </footer>
    </>
  );
}
