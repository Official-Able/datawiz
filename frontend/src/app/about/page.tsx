import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-48 pb-32 px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-6xl font-extrabold text-primary mb-12">Understanding Before Building.</h1>
          <div className="prose prose-xl text-gray-600 space-y-8">
            <p className="text-2xl leading-relaxed">
              At Datawizable, we believe most organizational problems aren't technical—they're operational.
              We don't start with code; we start with a deep discovery of your bottlenecks.
            </p>
            <p>
              Whether it's a bank processing thousands of enrolments or an NGO tracking global human trafficking,
              we engineer digital systems that provide clarity, scale, and intelligence.
            </p>
            <div className="bg-primary p-12 rounded-3xl text-white mt-20">
               <h2 className="text-3xl font-bold text-accent mb-6">Our Mission</h2>
               <p className="text-xl">To bridge the gap between business reality and technology execution by engineering solutions that remove barriers to growth.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
