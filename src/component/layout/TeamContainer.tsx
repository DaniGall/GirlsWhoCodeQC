interface TeamContainerProps {
  teammates: { name: string; role: string }[];
}
export default function TeamContainer({ teammates }: TeamContainerProps) {
  return (
    <div className="team-grid">
      {teammates.map((person) => (
        <article className="team-card" key={person.name}>
          <div className="avatar" aria-hidden="true">
            {person.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </div>
          <h2>{person.name}</h2>
          <p>{person.role}</p>
        </article>
      ))}
    </div>
  );
}
