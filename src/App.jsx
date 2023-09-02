import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Enjoy from "./Components/Enjoy";
import Download from "./Components/Download";
import Everywhere from "./Components/Everywhere";
import Profile from "./Components/Profile";
import Faqs from "./Components/Faqs";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";

function App() {

  return (
    <>
    <Signup />
    <Navbar />
    <main>
      <Hero />
      <Enjoy />
      <Download />
      <Everywhere />
      <Profile />
      <Faqs />
    </main>
    <Footer />
    </>
  )
}

export default App
