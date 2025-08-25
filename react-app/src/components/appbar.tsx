import React, {useState, useEffect} from "react";

function StaticAppbar({isScrolled} : {isScrolled: boolean}) {

  const backGroundColor = isScrolled ? "bg-brand-green" : "bg-brand-green-light"
  const contentColor = isScrolled ? "text-brand-green-light-02" : "text-brand-green"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex flex-row justify-between h-[72px] ${backGroundColor} items-center px-[123px]`}>
      <img src={isScrolled ? "assets/icons/logo_white.svg" : "assets/icons/logo.svg"} className="h-[20px] w-[132px] object-scale-down" />
      <div className="flex flex-row gap-[32px]">
      <AppbarItem label="Início" isSelected={true} contentColor={contentColor} />
      <AppbarItem label="Sobre" isSelected={false} contentColor={contentColor} />
      <AppbarItem label="Serviços" isSelected={false} contentColor={contentColor} />
      <AppbarItem label="Depoimentos" isSelected={false} contentColor={contentColor} />
      </div>
      <button className={`${contentColor} border-1 ${isScrolled ? "border-brand-green-light-02" : "border-brand-green"} rounded-full px-4 py-2 cursor-pointer`}>
      Agendar consulta
      </button>
    </nav>
  );
}


function AppbarItem({ label, isSelected, contentColor }: { label: string; isSelected: boolean; contentColor: string }) {
  return (
    <div className={`${isSelected ? "font-bold " : "opacity-60"} ${contentColor}`}>
      {label}
    </div>
  );
}

export default function Appbar() {

  const height = 72;

  const [isScrolled, setIsScrolled] = useState(false);

  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY || 0);
      setIsScrolled(window.scrollY > height);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <StaticAppbar isScrolled={isScrolled} />;
}