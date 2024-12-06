import IconChat from "./icons/chat";
import Section from "./ui/section";
import SectionTitle from "./ui/section-title";
import TestimonialCarousel from "./ui/testimonial-carousel";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: "/img/1.webp",
      name: "Hans Landa",
      role: "Product Manager at Technocorp",
      testimonial:
        "Hugo consistently went above and beyond to ensure project success. His innovative ideas and attention to detail were invaluable to our team.",
      linkedinUrl: "https://linkedin.com/in/hanslanda",
    },
    {
      avatar: "/img/2.webp",
      name: "Shosanna Dreyfus",
      role: "Lecturer at OAMK",
      testimonial:
        "Hugo is one of the most dedicated developers I’ve had the pleasure to teach. He truly stands out in any team with his communication and understanding skills.",
      linkedinUrl: "https://linkedin.com/in/janedoe",
    },
    {
      avatar: "/img/3.webp",
      name: "Dominic De Coco",
      role: "Senior Developer at Technocorp",
      testimonial:
        "Hugo's ability to problem-solve and deliver under tight deadlines was remarkable. Even though there was hard time constraints he delivered everything.",
      linkedinUrl: "https://linkedin.com/in/janedoe",
    },
  ];

  return (
    <Section id="testimonials">
      <SectionTitle title="Lucky Encounters" icon={<IconChat />} />
      <TestimonialCarousel slides={testimonials} />
    </Section>
  );
};

export default Testimonial;