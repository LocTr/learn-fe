import React, { useState, useEffect } from "react";


export default function Appbar() {

  const height = 72;

  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > height);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <StaticAppbar isScrolled={isScrolled} />;
}

function StaticAppbar({ isScrolled }: { isScrolled: boolean }) {

  const backGroundColor = isScrolled ? "bg-brand-green" : "bg-brand-green-light"
  const contentColor = isScrolled ? "text-brand-green-light-02" : "text-brand-green"

  return (
    <nav className={`fixed top-0 left-0 transition-colors duration-700 ease-in-out right-0 z-50 flex flex-row justify-between h-[72px] ${backGroundColor} items-center px-[123px]`}>
      <img src={isScrolled ? "assets/icons/logo_white.svg" : "assets/icons/logo.svg"} className="h-[20px] w-[132px] object-scale-down" />
      <AppbarItems contentColor={contentColor} />
      <button className={`${contentColor} border-1 ${isScrolled ? "border-brand-green-light-02" : "border-brand-green"} rounded-full px-4 py-2 cursor-pointer`}>
        Agendar consulta
      </button>
    </nav>
  );
}

function AppbarItems({ contentColor }: { contentColor: string }) {
  const [index, setIndex] = useState(0);

  return <div className="flex flex-row gap-[32px]">
    <AppbarItem label="Início" isSelected={index == 0} contentColor={contentColor} onClick={() => setIndex(0)} />
    <AppbarItem label="Sobre" isSelected={index == 1} contentColor={contentColor} onClick={() => setIndex(1)} />
    <AppbarItem label="Serviços" isSelected={index == 2} contentColor={contentColor} onClick={() => setIndex(2)} />
    <AppbarItem label="Depoimentos" isSelected={index == 3} contentColor={contentColor} onClick={() => setIndex(3)} />
  </div>
}


function AppbarItem({ label, isSelected, contentColor, onClick }: { label: string; isSelected: boolean; contentColor: string; onClick: () => void }) {
  return (
    <div className="height-[72px] flex items-center relative px-2 ">
      <button onClick={onClick} className={`${contentColor} cursor-pointer relative `}>
        <span className={`${isSelected ? "font-bold " : "opacity-60"} transition-colors duration-700 ease-in-out`}>
          {label}
        </span>
      </button>
      {isSelected && <div className={`h-[2px] w-full ${contentColor} bg-current absolute -bottom-[24px] left-0`}></div>}
    </div>
  );
}

