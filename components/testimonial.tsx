import Image from "next/image";
import IconChat from "./icons/chat";
import Section from "./ui/section";
import SectionTitle from "./ui/section-title";
import IconLinkedIn from "./icons/linkedin";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Testimonial = () => {
    return (
        <Section>
            <SectionTitle title="Lucky encounters" icon={<IconChat />} />

            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 p-8 bg-gray-50 w-2/3 mx-auto lg:mx-0">
                            <Image src="/img/testimonial-1.png" width={191} height={250} alt="testimonial 1" />
                            <div>
                                <div className="flex gap-4">
                                    <h2 className="text-2xl font-semibold pb-4 underline">Hans Landa</h2>
                                    <IconLinkedIn />
                                </div>
                                <h3 className="text-xl font-normal pb-8">Product Manager at Technocorp</h3>
                                <p>Jon consistently went above and beyond to ensure project success. His innovative ideas and attention to detail were invaluable to our team. </p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                    <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 p-8 bg-gray-50 w-2/3 mx-auto lg:mx-0">
                            <Image src="/img/testimonial-1.png" width={191} height={250} alt="testimonial 1" />
                            <div>
                                <div className="flex gap-4">
                                    <h2 className="text-2xl font-semibold pb-4 underline">Hans Landa</h2>
                                    <IconLinkedIn />
                                </div>
                                <h3 className="text-xl font-normal pb-8">Product Manager at Technocorp</h3>
                                <p>Jon consistently went above and beyond to ensure project success. His innovative ideas and attention to detail were invaluable to our team. </p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                    <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 p-8 bg-gray-50 w-2/3 mx-auto lg:mx-0">
                            <Image src="/img/testimonial-1.png" width={191} height={250} alt="testimonial 1" />
                            <div>
                                <div className="flex gap-4">
                                    <h2 className="text-2xl font-semibold pb-4 underline">Hans Landa</h2>
                                    <IconLinkedIn />
                                </div>
                                <h3 className="text-xl font-normal pb-8">Product Manager at Technocorp</h3>
                                <p>Jon consistently went above and beyond to ensure project success. His innovative ideas and attention to detail were invaluable to our team. </p>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>

        </Section>
    );
}

export default Testimonial;