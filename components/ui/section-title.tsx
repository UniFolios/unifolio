interface SectionTitleProps {
    title: string;
    icon: React.ReactNode;
}
const SectionTitle = ({
    title,
    icon,
}: SectionTitleProps) => {
    return (
        <div className="flex lg:justify-start justify-center gap-x-4 py-8">
            <h2 className="text-2xl font-normal">{title}</h2>
            {icon}
        </div>
    )
}

export default SectionTitle;