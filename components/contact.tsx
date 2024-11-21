import IconArrow from "./icons/arrow";
import IconContact from "./icons/contact";
import IconCopy from "./icons/copy";
import IconLinkedIn from "./icons/linkedin";
import Section from "./ui/section";
import SectionTitle from "./ui/section-title";

const Contact = () => {
    return (
        <Section id="contact">
            <SectionTitle title="Let&apos;s Collaborate" icon={<IconContact />} />
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 px-4 md:px-8 py-6">
                <div className="flex flex-col justify-center w-full items-center px-8 py-16 bg-gray-50 gap-8">
                    <div className="p-4 border border-gray-500">
                        <IconLinkedIn />
                    </div>
                    <div className="flex justify-between gap-8 w-full">
                        <IconArrow />
                        <IconCopy />
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full items-center px-8 py-16 bg-gray-50 gap-8">
                    <div className="p-4 border border-gray-500">
                        <IconLinkedIn />
                    </div>
                    <div className="flex justify-between gap-8 w-full">
                        <IconArrow />
                        <IconCopy />
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full items-center px-8 py-16 bg-gray-50 gap-8">
                    <div className="p-4 border border-gray-500">
                        <IconLinkedIn />
                    </div>
                    <div className="flex justify-between gap-8 w-full">
                        <IconArrow />
                        <IconCopy />
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Contact;