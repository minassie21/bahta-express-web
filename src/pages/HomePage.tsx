import { Link, useLocation } from "react-router-dom";
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
import heroBackground from "@/assets/hero-background.jpeg";
// import heroBackground from "@/assets/main-background.png";

// import { blogs } from "@/constants/blogs";
import { services, logisticsServices } from "@/constants/services";
import { testimonials } from "@/constants/testimonials";
import { partners } from "@/constants/partners";

import SEO from "@/components/SEO";
import {
  LogisticsCompanySchema,
  ServicesSchema,
} from "@/components/StructuredData";
import { getBlogs } from "@/apis/blog";
import AnimatedCounter from "@/components/AnimatedCounter";
import { getClients, getWhatClientsSays } from "@/apis/client";

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
  const [blogs, setBlogs] = useState<any[]>([]);
  const [whatClientsSays, setWhatClientsSays] = useState<any[]>([]);
  // const [clientsLogo, setClientsLogo] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blog = await getBlogs();
      const testimonial = await getWhatClientsSays();
      // const clients = await getClients();
      setBlogs(blog);
      setWhatClientsSays(testimonial);
      // setClientsLogo(clients);
    };

    fetchBlogs();
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === whatClientsSays.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? whatClientsSays.length - 1 : prev - 1
    );
  };

  return (
    <>
      <SEO
        title="Bahta Express Logistics | Global Logistics Solutions"
        description="Expert China-Ethiopia logistics since 1977. Specialized in air cargo, ocean freight, customs clearance and warehousing services. Trusted by industry leaders."
        canonical="https://bahtaexpress.com/"
      />

      <LogisticsCompanySchema />
      <ServicesSchema
        services={[
          {
            id: "ocean-freight",
            name: "Ocean Freight Solutions",
            description:
              "LCL, FCL Shipments via ESL, China to Ethiopia Ports. Break Bulk/Heavy Lift Experience, Compliant with Import and Export Regulations.",
            url: "https://bahtaexpress.com/service#ocean-freight",
          },
          {
            id: "air-freight",
            name: "Air Freight Cargo",
            description:
              "Competitive Air Cargo via Ethiopian, Saudi, Emirates Airlines from major Chinese cities to Addis Ababa. Guaranteed space, Rapid Transit.",
            url: "https://bahtaexpress.com/service#air-freight",
          },
          {
            id: "customs-compliance",
            name: "Customs and Regulatory Compliance",
            description:
              "Expert China-Ethiopia export and import customs documentation. Duty optimization strategies minimize delays and avoid penalties.",
            url: "https://bahtaexpress.com/service#customs-compliance",
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-wide">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-90 to-white mb-1 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  GLOBAL LOGISTICS
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-50 to-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  SOLUTIONS
                </span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-display text-xl text-white mb-8"
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
                  aria-label="Call Bahta Express"
                  variant="outline"
                  size="lg"
                  className="rounded-full bg-white text-black hover:bg-orange-100"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call
                </Button>
              </a>
              <a href="/quote">
                <Button
                  aria-label="Get a Quote"
                  size="lg"
                  className="rounded-full bg-orange-500 hover:bg-orange-600 shadow-md border-2 border-white/30"
                >
                  Get a Quote
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-12 bg-gray-50 overflow-hidden">
          <div className="container w-[90vw] sm:w-[50vw] mx-auto px-6">
            <FadeInWhenVisible>
              <h2 className="text-center font-display text-lg font-medium text-gray-700 mb-8">
                Trusted by Industry Leaders
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible variants={fadeIn}>
              <InfiniteLogoSlider />
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
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                We deliver seamless air cargo, ocean freight, and end-to-end
                logistics solutions—meticulously tailored for speed,
                reliability, and your specific supply chain requirements. One
                trusted partner, endless possibilities.
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
                  <h3 className="text-xl font-display font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <a
                    href={`/service/${service.id}`}
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
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Logistics Services */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-6">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-display font-bold text-center mb-4">
                Comprehensive Logistics Solutions
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
                  <h3 className="text-xl font-display font-bold mb-2">
                    {service.title}
                  </h3>
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
              <h2 className="text-3xl font-display font-bold mb-12 text-center">
                Excellence in Logistics Since 1977
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
                <h3 className="text-2xl font-display font-bold mb-2">
                  Cargo Delivered
                </h3>
                <p className="mb-4">
                  Over 10 million metric tons shipped with precision and care—a
                  testament to our unwavering commitment to excellence.
                </p>
                <span className="text-4xl font-display font-bold">
                  <AnimatedCounter target={10} />
                  M+
                </span>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-orange-500 text-white p-8 rounded-lg"
              >
                <h3 className="text-2xl font-display font-bold mb-2">
                  Years of Expertise
                </h3>
                <p className="mb-4">
                  Since 1977: Nearly five decades of pioneering logistics
                  innovation, building trust, and delivering results.
                </p>
                <span className="text-4xl font-display font-bold">
                  <AnimatedCounter target={47} />+
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <FadeInWhenVisible>
                <h2 className="text-3xl font-display font-bold mb-12 text-center">
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
                      {whatClientsSays.map((testimonial, index) => (
                        <div
                          key={index}
                          className="w-full flex-shrink-0 p-2 sm:p-6"
                        >
                          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-sm mx-2 sm:mx-8">
                            <p className="italic text-gray-700 mb-4 text-lg">
                              "{testimonial.message}"
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                              <img
                                src={`${import.meta.env.VITE_API_URL}/public/uploads/images/ClientLogos/${testimonial.logo_url}`}
                                alt={`${testimonial.company_name} logo`}
                                className="h-12 w-12 object-contain"
                              />
                              <div>
                                <p className="font-display font-bold text-gray-900">
                                  {testimonial.name}
                                </p>
                                <p className="text-gray-600">
                                  {testimonial.client_role}
                                </p>
                                <p className="text-gray-500 text-sm">
                                  {testimonial.company_name}
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
              <h2 className="text-3xl font-display font-bold text-center mb-12">
                Industry Insights & Updates
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
                    src={`${import.meta.env.VITE_API_URL}/public/uploads/images/blog/${blog.image_url}`}
                    alt={blog.title}
                    className="mb-4 h-48 object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-display font-bold mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {blog.excerpt}...
                  </p>
                  <a
                    href={`/blog/detail/${blog.post_id}`}
                    rel="noreferrer"
                    className="text-orange-500 hover:text-orange-600 inline-flex items-center"
                  >
                    Read Full Article
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
