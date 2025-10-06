import Header from "../../component/layout/Header";
import Footer from "../../component/layout/Footer";

export default function Team() {
  return (
    <div>
      <Header></Header>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1>List Team here</h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
