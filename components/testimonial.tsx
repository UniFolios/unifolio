import IconChat from "./icons/chat";
import Section from "./ui/section";
import SectionTitle from "./ui/section-title";
import TestimonialCarousel from "./ui/testimonial-carousel";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: "/img/testimonial-1.png",
      name: "Hans Landa",
      role: "Product Manager at Technocorp",
      testimonial:
        "Jon consistently went above and beyond to ensure project success. His innovative ideas and attention to detail were invaluable to our team.",
      linkedinUrl: "https://linkedin.com/in/hanslanda",
    },
    {
      avatar: "/img/testimonial-1.png",
      name: "Jane Doe",
      role: "Software Engineer at Innovatech",
      testimonial:
        "Working with Jon was a pleasure. His technical skills and team-first attitude made him a standout contributor.",
      linkedinUrl: "https://linkedin.com/in/janedoe",
    },
    {
      avatar: "/img/testimonial-1.png",
      name: "Mark Smith",
      role: "CTO at TechVision",
      testimonial:
        "Jon's ability to problem-solve and deliver under tight deadlines was remarkable. Highly recommend!",
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