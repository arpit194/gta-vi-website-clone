import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => setLoaded(true);

    if (document.readyState === "complete") {
      // already loaded
      setLoaded(true);
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <main>
      {!loaded && (
        <div className="w-screen h-screen bg-black text-5xl text-white font-bold flex justify-center items-center">
          Loading...
        </div>
      )}
      {loaded && (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </main>
  );
}

export default App;
