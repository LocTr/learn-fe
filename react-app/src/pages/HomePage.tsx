import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import InfoBox from "../components/InfoBox";
import Section1 from "../components/Section_1";
import Section2 from "../components/Section_2";
import Section3 from "../components/Section_3";
import Section4 from "../components/Section_4";

export default function HomePage() {
  return (
    <>
      <Appbar />
        <>
            <Section1 />
            <div className="flex justify-center relative -mt-25 -mb-30 z-20">
                    <InfoBox />
            </div>
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />
        </>
    </>
  );
}
