import Header from "../../component/layout/Header";
import Footer from "../../component/layout/Footer";
import TeamContainer from "../../component/layout/TeamContainer";

export default function Team() {
  const teammates = [
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Bob Smith",
      role: "Backend Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Charlie Brown",
      role: "UI/UX Designer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Diana Prince",
      role: "Project Manager",
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div>
      <Header></Header>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1>
            <TeamContainer teammates={teammates} />
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
