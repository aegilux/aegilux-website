import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0b1737] text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 gap-12">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Compliance + AI for AU regulated SMBs
          </h1>
          <p className="text-lg text-gray-300">
            Aegilux ships Essential Eight on AWS for cloud security and an AI Chief of Staff for compliance workflows. AU-only, AWS Sydney.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            to="/cloud-security"
            className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0b1737] transition-colors rounded text-center font-semibold"
          >
            Cloud Security →
          </Link>
          <Link
            to="/ai"
            className="px-8 py-4 bg-cyan-400 text-[#0b1737] hover:bg-cyan-300 transition-colors rounded text-center font-semibold"
          >
            AI Chief of Staff →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400 text-center max-w-2xl">
          <span>AU-owned, AU-delivered for regulated buyers</span>
          <span>AWS ap-southeast-2 (Sydney) primary</span>
          <span>Privacy Act 1988 + Essential Eight ML2 aligned</span>
          <span>Built before 10 December 2026 ADM transparency deadline</span>
        </div>
      </main>
      <Footer />
    </div>
  );
}
