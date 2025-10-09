import React from "react";

interface TeamContainerProps {
  teammates: { name: string; role: string; image: string }[];
}

export default function TeamContainer({ teammates }: TeamContainerProps) {
  return (
    <div>
      {/* Render teammates or other content */}
      {teammates.map((teammate, index) => (
        <div key={index}>
          <h2 className="text-xl font-bold">{teammate.name}</h2>{" "}
          {/* Bold and bigger */}
          <p>{teammate.role}</p>
          <img src={teammate.image} alt={teammate.name} />
        </div>
      ))}
    </div>
  );
}
