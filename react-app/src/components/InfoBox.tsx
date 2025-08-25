import { CheckIcon } from "@heroicons/react/16/solid"

export default function InfoBox() {
    return <div className="h-[210px] bg-brand-beige flex flex-row items-center justify-center gap-6 grid-rows-5 px-[60px] rounded-[6px] border-1 border-brand-green-light">
        <InfoBoxItem number="+3.500" label="Pacientes atendidos" />
        <Divider />
        <InfoBoxItem number="+15" label="Especialistas disponíveis" />
        <Divider />
        <InfoBoxItem number="+10" label="Anos no mercado" />
    </div>;
}


function InfoBoxItem({ number, label }: { number: string; label: string }) {
    return (
        <div className="flex flex-col items-center px-[100px]">
            <div className="text-[48px] font-bold font-default text-gray-headline">{number}</div>
            <div className="text-[16px] font-default text-brand-green">{label}</div>
        </div>
    );
}


function Divider() {
    return (
        <div className="h-[83px] border-l-1 border-brand-green"></div>
    );
}