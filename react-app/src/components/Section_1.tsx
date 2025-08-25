export default function Section1() {
  return (
    <div className="h-[656px] bg-brand-green-light flex flex-row items-center p-[123px] pt-50">
      <div className="">
        <div className="text-[14px] font-bold text-brand-green pb-[16px]">
          BOAS-VINDAS A DOCTORCARE 👋
        </div>
        <div className="text-[52px] text-gray-headline pb-[24px]">Assistência médica simplificada para todos</div>
        <div className="text-[18px] text-gray-paragraph pb-[32px]">
          Os médicos da DoctorCare vão além dos sintomas para tratar a causa
          raiz de sua doença e proporcionar uma cura a longo prazo.
        </div>
        <button className="text-brand-green-light-02 border-1 bg-brand-green border-brand-green rounded-full px-4 py-2 cursor-pointer">
          Agende sua consulta
        </button>
      </div>
      <img
        src="assets/images/woman-img.png"
        className="w-[420px] object-cover ml-[60px]"
      />
    </div>
  );
}
