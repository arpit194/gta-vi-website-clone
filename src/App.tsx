import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
