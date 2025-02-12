import ButtonToTop from "@/components/ButtonToTop";
import Cardlist from "@/components/Cardlist";
import Hero2 from "@/components/heroOptions/Hero2";
import ImageCarusel from "@/components/Imagecarusel";
// import SmallCards from "@/components/SmallCards";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero2
        title={"Lucky Fitness"}
        img={"/images/lucky-fitness (2).jpg"}
        text={"Sa nama je trening zabava!"}
      />
      <ButtonToTop />
      <Cardlist />
      {/* <SmallCards /> */}
      <ImageCarusel />
      <Testimonials />
    </div>
  );
}
