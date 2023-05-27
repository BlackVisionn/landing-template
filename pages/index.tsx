import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Template</title>
      </Head>
      <main>
        <Header />
        <Features />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
