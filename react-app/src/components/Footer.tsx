export default function Footer() {
  return (
    <footer className="flex grid-rows-2 bg-brand-green p-[80px]">
      <div className="flex flex-1 flex-col gap-3 items-start text-brand-beige">
        <img
          src="assets/icons/logo_white.svg"
          className="h-[30px] object-scale-down mb-5"
        />
        <div>&copy; 2023 DoctorCare.</div>
        <div>Todos os direitos reservados.</div>
      </div>
    <div className="flex flex-1 flex-row justify-end gap-10 self-center">
      <img
        src="assets/icons/facebook.svg"
        className="h-[30px] object-scale-down"
      />
      <img
        src="assets/icons/instagram.svg"
        className="h-[30px] object-scale-down"
      />
      <img
        src="assets/icons/youtube.svg"
        className="h-[30px] object-scale-down"
      />
    </div>
    </footer>
  );
}
