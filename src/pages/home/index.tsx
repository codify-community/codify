import Header from "@/components/header";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet title="Home" />
      <Header />
    </>
  );
}
