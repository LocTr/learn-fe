import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Section4() {
  return (
    <div className="h-[606px] bg-brand-white flex grid-rows-2 p-[123px]">
      <div className="flex-1 items-center">
        <div className="text-[40px] font-bold text-gray-headline pb-[40px]">
          Entre em contato <br /> com a gente!
        </div>
        <InfoRow icon={<MapPinIcon />} content="R. Amauri Souza, 346" />
        <InfoRow icon={<EnvelopeIcon />} content="contato@doctorcare.com" />
      </div>
      <img
        src="assets/images/man-img.png"
        className="w-[575] h-[379px] object-cover rounded-xl"
      />
    </div>
  );
}

function InfoRow({ icon, content }: { icon: JSX.Element; content: string }) {
  return (
    <div className="flex flex-row items-center gap-4 pb-2">
      <div className="w-5 h-5 text-brand-green">
        {icon}
      </div>
      <div className="text-[18px] text-gray-paragraph">
        {content}
      </div>
    </div>
  );
}
