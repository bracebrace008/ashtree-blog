
import HeaderBg from "./components/HeaderBg"
import Navbar from "./components/Navbar";
import Container from "./components/Container";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeaderBg />
      <Container />
    </div>
  );
}
