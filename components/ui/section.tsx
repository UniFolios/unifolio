interface SectionProps {
    children: React.ReactNode;
    id?: string;
}
const Section = ({
    children,
    id,
}: SectionProps) => {
    return ( 
        <section className="mb-12" id={id}>
            {children}
        </section>
     );
}
 
export default Section;