import PartnerSeven from "@/assets/partner-7.png";
import PartnerEleven from "@/assets/partner-11.png";


type Testimonial = {
    quote: string;
    author: string;
    position: string;
    company: string;
    logo: string;
};

const testimonials: Testimonial[] = [
    {
        quote:
            "Bahta Express Logistics delivered 30 x 40 HQ containers of medical furniture,equipment,and materials from Guangzhou Nansha port to Modjo Dry Port.Their seamless customs clearance,meticulous handling,and punctuality accelerated our hospital expansion. A trusted partner for critical shipments.",
        author: "Dr. Yearaeifirae Sileshi",
        position: "Chief Executive Officer",
        company: "Saglan Wajee General Hospital",
        logo: PartnerSeven,
    },
    {
        quote:
            "Bahta Express expertly managed our shipment of 60 x 40FT HQ containers from Shanghai Port to Dire Dawa and Modjo Dry Ports.(Bearings and Spare Parts) Their professionalism, clear communication, and deep logistics expertise ensured timely, secure delivery. They navigated documentation and customs seamlessly, offering competitive rates and reliable end-to-end support. An outstanding partner for Ethiopian logistics we highly recommended.",
        author: "Ato.Amanuel Debebe",
        position: "Chief Operations Officer",
        company: "Debebe Shiferaw Bearing and Spare Part Import",
        logo: PartnerEleven,
    },
];

export { testimonials };
export type { Testimonial };
