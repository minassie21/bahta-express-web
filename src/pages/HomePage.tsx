import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import {
  useMotionValue,
  useAnimation,
  Variants,
  motion,
  useInView,
} from "framer-motion";

import InfiniteLogoSlider from "@/components/InfinteLogoSlider";

import PartnerOne from "@/assets/partner-1.png";
import PartnerTwo from "@/assets/partner-2.png";
import PartnerThree from "@/assets/partner-3.png";
import PartnerFour from "@/assets/partner-4.png";
import PartnerFive from "@/assets/partner-5.png";
import PartnerSix from "@/assets/partner-6.png";
import PartnerSeven from "@/assets/partner-7.png";
import PartnerEight from "@/assets/partner-8.png";
import PartnerNine from "@/assets/partner-9.png";
import PartnerTen from "@/assets/partner-10.png";
import PartnerEleven from "@/assets/partner-11.png";

import heroBackground from "@/assets/hero-background.jpeg";

import OceanFreignImage from "@/assets/services/OceanFreight.png";
import AirFreigImage from "@/assets/services/AirFreight.png";
import CustomsImage from "@/assets/services/Customs.png";

import PostImageOne from "@/assets/posts/VolumetricWeight.png";
import PostImageTwo from "@/assets/posts/fiata-social.png";
import PostImageThree from "@/assets/posts/Foreign-freighters.jpg";
import { c } from "node_modules/vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P";
import SEO from "@/components/SEO";
import {
  LogisticsCompanySchema,
  ServicesSchema,
} from "@/components/StructuredData";

const partners = [
  {
    name: "Partner 1",
    logo: PartnerOne,
  },
  {
    name: "Partner 2",
    logo: PartnerTwo,
  },
  {
    name: "Partner 3",
    logo: PartnerThree,
  },
  {
    name: "Partner 4",
    logo: PartnerFour,
  },
  {
    name: "Partner 5",
    logo: PartnerFive,
  },
  {
    name: "Partner 6",
    logo: PartnerSix,
  },
  {
    name: "Partner 7",
    logo: PartnerSeven,
  },
  {
    name: "Partner 8",
    logo: PartnerEight,
  },
  {
    name: "Partner 9",
    logo: PartnerNine,
  },
  {
    name: "Partner 10",
    logo: PartnerTen,
  },
  {
    name: "Partner 11",
    logo: PartnerEleven,
  },
];

const services = [
  {
    title: "Ocean Freight Solutions",
    description:
      "LCL,FCL Shipments via ESL,China to Ethiopia Ports.Break Bulk/Heavy Lift Experience,Compliant with Import and Export Regulation",
    image: OceanFreignImage,
  },
  {
    title: "Air Freight Cargo",
    description:
      "Competitive Air cargo Via Ethiopian,Saudi,Emirates Airlines from major Chinese cities to Addis Ababa. Guaranteed space,Rapid Transit.",
    image: AirFreigImage,
  },
  {
    title: "Customs and Regulatory compliance",
    description:
      "Expert China-Ethiopia export and import Customs documentation. Duty optimization strategies minimize delays and avoid penalities.",
    image: CustomsImage,
  },
];

const logisticsServices = [
  {
    title: "Warehouse Services",
    description:
      "Cargo Consolidation,storage,inventory management and cross-docking,ensuring efficient Ethiopia-bound Logistics with Flexible,scalable solutions for diverse shipment needs.",
  },
  {
    title: "Pre-Shipment Verification of conformity (PVOC) ",
    description:
      "We expertly prepare PVOC Documentation required by Ethiopian Standards from Bureau Veritas and Contenca,ensuring compliance with Ethiopian standards and seamless customs clearance for your shipments.",
  },
  {
    title: "Human Network Air cargo solutions ",
    description:
      "We utilize trusted personnel and airline staff networks to securely transport items from Guangzhou,Chengdu or Shanghai to Addis Ababa,ensuring personalized handling and seemless coordination at every transit point",
  },
];

const testimonials = [
  {
    quote:
      "Bahta Express Logistics delivered 30 x 40 HQ containers of medical furniture,equipment,and materials from Guangzhou Nansha port to Modjo Dry Port.Their seamless customs clearance,meticulous handling,and punctuality accelerated our hospital expansion. A trusted partner for critical shipments.",
    author: "Dr. Yearaeifirae Sileshi ",
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

const blogs = [
  {
    title: "Calculating Chargeable Weight by Air, Ocean, Road and Rail",
    excerpt:
      "Whichever is greater is a phrase to remember when calculating the cost of moving goods by air, ocean, road or rail...",
    image: PostImageOne,
    link: "https://www.dhl.com/gt-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html",
  },
  {
    title: "What is freight forwarding and what do forwarders do?",
    excerpt:
      "Freight forwarding and logistic services are services of any kind relating to the carriage (performed by single mode or multimodal transport means),...",
    image: PostImageTwo,
    link: "https://fiata.org/about-freight-forwarding/",
  },
  {
    title: "Foreign freighters shy away from multimodal logistics operator bid",
    excerpt:
      "The list of companies awarded the first batch of multimodal logistics operator licenses in Ethiopia features ...",
    image: PostImageThree,
    link: "https://www.thereporterethiopia.com/39271/",
  },
];

// animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const FadeInWhenVisible: React.FC<{
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
}> = ({ children, variants = fadeInUp, className = "" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true, // Use 'once' instead of 'triggerOnce'
    amount: 0.2, // Use 'amount' instead of 'threshold'
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <>
      <SEO
        title="Global Logistics Solutions | Bahta Express Logistics"
        description="Expert China-Ethiopia logistics since 1977. Specialized in air cargo, ocean freight, customs clearance and warehousing services. Trusted by industry leaders."
        canonical="https://bahtaexpress.com/"
      />

      <LogisticsCompanySchema />
      <ServicesSchema
        services={[
          {
            name: "Ocean Freight Solutions",
            description:
              "LCL,FCL Shipments via ESL,China to Ethiopia Ports.Break Bulk/Heavy Lift Experience,Compliant with Import and Export Regulation",
            url: "https://bahtaexpress.com/services#ocean-freight",
          },
          {
            name: "Air Freight Cargo",
            description:
              "Competitive Air cargo Via Ethiopian,Saudi,Emirates Airlines from major Chinese cities to Addis Ababa. Guaranteed space,Rapid Transit.",
            url: "https://bahtaexpress.com/services#air-freight",
          },
          {
            name: "Customs and Regulatory compliance",
            description:
              "Expert China-Ethiopia export and import Customs documentation. Duty optimization strategies minimize delays and avoid penalities.",
            url: "https://bahtaexpress.com/services#customs-compliance",
          },
        ]}
      />

      <div className="flex flex-col">
        {/* Hero Section */}
        <section
          className="h-screen flex items-center justify-center px-6 relative"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-label="Global Logistics Solutions Banner"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="container mx-auto relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              GLOBAL LOGISTICS SOLUTIONS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-white mb-8"
            >
              Limitless Possibilities
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4 justify-center"
            >
              <a href="tel:+251911282956">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full bg-white text-black hover:bg-orange-100"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="rounded-full bg-orange-500 hover:bg-orange-600"
                >
                  Get a Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-12 bg-gray-50 overflow-hidden">
          <div className="container w-[90vw] sm:w-[50vw] mx-auto px-6">
            <FadeInWhenVisible>
              <h2 className="text-center text-lg font-medium text-gray-700 mb-8">
                Chosen by Industry Pioneers
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible variants={fadeIn}>
              <InfiniteLogoSlider logos={partners} />
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-center mb-4">
                Our Service Types
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-center text-gray-600 mb-12">
                Seamless air cargo, ocean freight, and end-to-end logistics
                solutions - Tailored for speed, scale, and your unique supply
                chain needs. One partner, limitless possibilities.
              </p>
            </FadeInWhenVisible>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col h-full bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-3xl shadow-sm p-6"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="mb-4 h-48 object-contain"
                  />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="text-orange-500 hover:text-orange-600 inline-flex items-center"
                  >
                    Learn more
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Logistics Services */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-6">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-center mb-4">
                Seamless Logistics Services
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-center text-gray-600 mb-12">
                Offering Warehouse Services, Pvoc Certifications and COC, and
                reliable Human Air Cargo Solutions for smooth deliveries.
              </p>
            </FadeInWhenVisible>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {logisticsServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold mb-12">
                Providing Services Since 1977
              </h2>
            </FadeInWhenVisible>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-orange-500 text-white p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-2">
                  Weights of goods moved
                </h3>
                <p className="mb-4">
                  Over 10 Million Metric Ton delivered. Zero Compromises
                </p>
                <span className="text-4xl font-bold"> 10M+</span>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-orange-500 text-white p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-2">Years of Experience</h3>
                <p className="mb-4">
                  Since 1977: Pioneering Logistics, Powering Progress
                </p>
                <span className="text-4xl font-bold">47+</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-center mb-8">
                What Our Clients Say
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible variants={fadeIn}>
              <div className="max-w-4xl mx-auto relative md:w-full sm:w-[90vw]">
                <div className="overflow-hidden">
                  <div
                    className="transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentTestimonial * 100}%)`,
                    }}
                  >
                    <div className="flex">
                      {testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className="w-full flex-shrink-0 p-2 sm:p-6"
                        >
                          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-sm mx-2 sm:mx-8">
                            <p className="italic text-gray-700 mb-4 text-lg">
                              "{testimonial.quote}"
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                              <img
                                src={testimonial.logo}
                                alt={`${testimonial.company} logo`}
                                className="h-12 w-12 object-contain"
                              />
                              <div>
                                <p className="font-bold text-gray-900">
                                  {testimonial.author}
                                </p>
                                <p className="text-gray-600">
                                  {testimonial.position}
                                </p>
                                <p className="text-gray-500 text-sm">
                                  {testimonial.company}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-between items-center mt-6 md:absolute md:top-1/2 md:left-0 md:right-0 md:-translate-y-1/2 md:mt-0">
                  <button
                    onClick={prevTestimonial}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10 md:absolute md:left-0 md:-translate-x-4"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                  </button>

                  <button
                    onClick={nextTestimonial}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10 md:absolute md:right-0 md:translate-x-4"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-700" />
                  </button>
                </div>

                {/* Pagination indicators */}
                <div className="flex justify-center mt-6 gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        currentTestimonial === index
                          ? "w-8 bg-orange-500"
                          : "w-2.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-center mb-12">
                Read Our Latest Post
              </h2>
            </FadeInWhenVisible>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {blogs.map((blog, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col h-full bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-3xl shadow-sm p-6"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="mb-4 h-48 object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{blog.excerpt}</p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-500 hover:text-orange-600 inline-flex items-center"
                  >
                    Continue Reading
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
