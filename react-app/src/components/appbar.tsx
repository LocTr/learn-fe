export default function Appbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between h-[72px] bg-brand-green items-center px-[123px]">
      <img src="assets/icons/logo.svg" className="h-[20px] object-scale-down" />
      <div className="flex flex-row gap-[32px]">
      <AppbarItem label="Início" isSelected={true} />
      <AppbarItem label="Sobre" isSelected={false} />
      <AppbarItem label="Serviços" isSelected={false} />
      <AppbarItem label="Depoimentos" isSelected={false} />
      </div>
      <button className="text-brand-green-light-02 border-1 border-brand-green-light-02 rounded-full px-4 py-2 cursor-pointer">
      Agendar consulta
      </button>
    </nav>
  );
}


function AppbarItem({ label, isSelected }: { label: string; isSelected: boolean }) {
  return (
    <div className={`text-brand-green-light-02 ${isSelected ? "font-bold " : "opacity-60"}`}>
      {label}
    </div>
  );
}