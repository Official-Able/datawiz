import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { Industries } from "@/components/home/Industries";
import { Approach } from "@/components/home/Approach";
import { Footer } from "@/components/layout/Footer";
import { VideoAd } from "@/components/home/VideoAd";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <VideoAd />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Solutions />
        <ProblemSolution />
        <Industries />
        <Approach />
      </main>
      <Footer />
    </div>
  );
}
