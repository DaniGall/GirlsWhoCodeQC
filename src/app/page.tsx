import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          {/* Title Box */}
          <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white">
            <h1 className="text-2xl font-bold">GWC</h1>
          </div>

          {/* Subtitle Box */}
          <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white">
            <h2 className="text-lg">hi</h2>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
