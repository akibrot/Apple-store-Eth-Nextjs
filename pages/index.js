import Head from "next/head";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import NavBar from "../components/NavBar";
import Products from "../components/Products";

export default function Home() {
  return <div className="w-screen relative top-[4rem] z-[10px] overflow-x-hidden overflow-hidden ">
    <Head>
      <title>Apple store ethiopia</title>
    </Head>
    <HomePage />
    <Products />
  </div>;
}
