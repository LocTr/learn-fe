import Appbar from "../components/Appbar";
import InfoBox from "../components/InfoBox";
import Section1 from "../components/Section_1";
import Section2 from "../components/Section_2";

export default function HomePage() {
  return (
    <>
      <Appbar />
      <div className="stack">
        <>
            <Section1 />
            <div className="flex justify-center relative -mt-10 mb-10 z-20 pointer-events-auto">
                <div className="transform -translate-y-1/2">
                    <InfoBox />
                </div>
            </div>
            <Section2 />
        </>
      </div>
    </>
  );
}
