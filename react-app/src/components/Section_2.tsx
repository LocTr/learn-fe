import { CheckIcon } from "@heroicons/react/16/solid";

export default function Section2() {
    return (
        <div className=" bg-brand-green-light-02 px-[123px] pt-[240px] pb-[80px]">
            <div className="text-[14px] font-bold font-default text-center text-brand-green pb-[16px]">SERVIÇOS</div>
            <div className="text-[40px] text-center fond-bold text-gray-headline pb-[64px]">Como podemos ajudá-lo<br/> a se sentir melhor?</div>
            <div className="grid grid-cols-3 grid-rows-2 gap-6">
                <BoxItem title="Problemas digestivos" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim." />
                <BoxItem title="Saúde Hormonal" content="Converse com um médico pelo seu celular" />
                <BoxItem title="Exames laboratoriais" content="Agende seus exames com facilidade" />
                <BoxItem title="Problemas digestivos" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim." />
                <BoxItem title="Saúde Hormonal" content="Converse com um médico pelo seu celular" />
                <BoxItem title="Exames laboratoriais" content="Agende seus exames com facilidade" />
            </div>
        </div>
    )
}

function BoxItem({ title, content }: { title: string; content: string }) {
    return (
        <div className="flex flex-col items-start bg-white rounded-[6px] outline-1 outline-brand-green-light p-[24px] gap-2 ">
            <CheckIcon className="h-[24px] text-brand-green rounded-full p-[5px] bg-brand-green-light"/>
            <div className="text-[24px] font-bold font-default text-gray-headline">{title}</div>
            <div className="text-[16px] font-default text-gray-paragraph">{content}</div>
        </div>
    );
}