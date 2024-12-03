interface SectionTitleProps {
    title: string;
    icon: React.ReactNode;
}
const SectionTitle = ({
    title,
    icon,
}: SectionTitleProps) => {
    return (
        <div className="flex lg:justify-start justify-center items-center
        xl:gap-[24px] xl:pb-10
        lg:gap-[24px] lg:pb-10
        md:gap-[24px] md:pb-10 
        sm:gap-[24px] sm:pb-10
        xsm:gap-[24px] xsm:pb-10      
        ">
            <h2 className="font-extralight
            sm:text-3xl 
            xsm:text-2xl
            ">{title}</h2>
            {icon}
        </div>
    )
}

export default SectionTitle;