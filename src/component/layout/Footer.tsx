import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full border-t bg-white/90 backdrop-blur-lg border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-6">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Girls Who Code Queens College. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              className="text-gray-600 hover:text-pink-600 font-medium transition-colors duration-200"
              href="https://girlswhocode.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GWC National
            </Link>
            <Link
              className="text-gray-600 hover:text-pink-600 font-medium transition-colors duration-200"
              href="https://www.instagram.com/gwc.qc/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
            <Link
              className="text-gray-600 hover:text-pink-600 font-medium transition-colors duration-200"
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TODO: ADD GWC Discord
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
