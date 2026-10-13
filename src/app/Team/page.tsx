import TeamContainer from "../../component/layout/TeamContainer";
export default function Team() {
  const teammates = [
    { name: "Soja Sunny", role: "President" },
    { name: "Daniela Gallego", role: "Vice President" },
    { name: "Farha Ferdous", role: "Secretary" },
    { name: "Lisbeth Palacios", role: "Treasurer" },
  ];
  return (
    <section className="shell section page-content">
      <p className="eyebrow">THE PEOPLE BEHIND THE LOOP</p>
      <h1>
        Building community,
        <br />
        <em>together.</em>
      </h1>
      <p className="intro">
        Meet the chapter team helping make Girls Who Code Queens College a
        welcoming place to learn and connect.
      </p>
      <TeamContainer teammates={teammates} />
      <div className="join-panel">
        <h2>Have an idea? Let’s talk.</h2>
        <p>Reach out about collaborations, questions, or getting involved.</p>
        <a className="button" href="mailto:qcloop882@gmail.com">
          Contact the chapter ↗
        </a>
      </div>
    </section>
  );
}
