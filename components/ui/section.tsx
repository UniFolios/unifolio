interface SectionProps {
    children: React.ReactNode;
    id?: string;
}
const Section = ({
    children,
    id,
}: SectionProps) => {
    return ( 
        <section className="
        relative
        xl:w-[1280px]  xl:px-[60px]
        lg:w-[1024px]  lg:px-[32px]
        md:w-[768px] md:px-[24px] 
        sm:w-[720px]
        xsm:w-[320px]
        " id={id}>
            {children}
        </section>
     );
}
 
export default Section;