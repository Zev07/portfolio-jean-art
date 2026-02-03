interface SolidSectionProps {
    bgColor?: string;
    textColor?: string;
    children: React.ReactNode;
}

export default function SolidSection({
    bgColor = "bg-zinc-50",
    textColor = "text-zinc-800",
    children
}: SolidSectionProps)

{
return (
    <section className={`${bgColor} ${textColor} py-24 px-6`}>
    <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 items-center">
        {children}
    </div>
    </section>
    );
}