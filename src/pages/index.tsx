import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Jumbotron from "@/components/Jumbotron";
import Layanan from "@/components/Layanan";
import UnderNavbar from "@/components/UnderNavbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      {/* <UnderNavbar /> */}
      <Jumbotron />
      <Layanan />
    </div>
  );
}
