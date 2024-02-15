import Hero from "@/components/preview/Hero";
import Buy from "@/components/preview/Buy";
import CopyRight from "@/components/preview/CopyRight";
import Demo from "@/components/preview/Demo";
import Features from "@/components/preview/Features";
import Home1 from "./(homes)/home-1/page";

import "../public/assets/css/style.css";

export const metadata = {
  title: "Preview || Bostami - Professional portfolio NextJS Template",
  description:
    "Discover Botami,the most impressive portfolio template for work showcase, blog",
};
export default function page() {
  return (
    <>
      <Home1 />
    </>
  );
}
