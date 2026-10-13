import TeamContainer from "../../component/layout/TeamContainer";
export default function Team() {
  const teammates = [
    { name: "Ritika Deb", role: "President" },
    { name: "Sara Lukacevic", role: "Vice President" },
    { name: "Victoria Zhunio Catano", role: "Secretary" },
    { name: "Umaiya Joha", role: "Treasurer" },
    { name: "Daniela Gallego", role: "Marketing Director" },
    { name: "New Person", role: "Graphic Designer" },
    { name: "Lauren Mistretta", role: "Mentor" },
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
