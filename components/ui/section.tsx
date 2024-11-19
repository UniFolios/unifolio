interface SectionProps {
    children: React.ReactNode;
}
const Section = ({
    children,
}: SectionProps) => {
    return ( 
        <section className="mb-12">
            {children}
        </section>
     );
}
 
export default Section;