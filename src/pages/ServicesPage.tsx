import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useAnimation, Variants, useInView } from "framer-motion";

import OceanFreignImage from "@/assets/services/OceanFreight.png";
import AirFreigImage from "@/assets/services/AirFreight.png";
import CustomsImage from "@/assets/services/Customs.png";
import HumanNetworkImage from "@/assets/services/HumanNetwork.png";
import ShippingRoadmapImage from "@/assets/services/ShippingRoadmap.png";

// Animation variants
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

const services = [
  {
    id: "express",
    title: "Ocean Freight Solutions",
    description:
      "At Bahta Express,We provide comprehensive ocean freight services to meet every shipping need-whether you are moving small cargo,Full Containers or oversized Equipment. Our ocean freight services are LCL(Less than a Container Load)- ideal for Smaller Shipments.Pay only for the Space you need !         FCL(Full Container load)- Best for large volume shipments. Secure,Fast,and dedicated- Your goods travel alone in a sealed Container !        Break Bulk and Heavy Lift - For non-Containerized,Oversized,or heavy cargo.Customized securing,handling,and documentation ",
    image: OceanFreignImage,
  },
  {
    id: "same-day",
    title: "Air Freight Cargo",
    description:
      "At Bahta Express Logistics we deliver speedy and secure air cargo solutions to keep supply chain moving- Whether for urgent,High value, or time sensetive shipments. our Air freight services are standard air freight, Express Air freight, and Charter Services !.",
    image: AirFreigImage,
  },
  {
    id: "next-day",
    title: "Customs and Regulatory compliance  ",
    description:
      "We handle all the customs formalities and regulatory requirements to ensure your shipments clears boarders without delays ! Our expertise on full documentation support , duty and tax optimization, PVOC and Standard compliance comes with No suprises and delays !.",
    image: CustomsImage,
  },
  {
    id: "additional",
    title: "Human Network Air cargo solutions",
    description:
      " Human Network Air Cargo Solutions, we redefine air freight by combining the power of trusted personnel, airline staff networks, and meticulous coordination to ensure your cargo arrives safely and efficiently. Specializing in routes from China key hubs—Guangzhou, Chengdu, and Shanghai—to Addis Ababa, we prioritize security, speed, and personalized service for every shipment..",
    image: HumanNetworkImage,
  },
];

const processSteps = [
  {
    id: "01",
    title: "Request a Quote",
    description:
      "Share your cargo details (type, volume, origin/destination)..",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "Plan & Prepare",
    description:
      "Finalize logistics, schedule pickup, and share documentation..",
    bgColor: "bg-orange-500",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "Ship & Track",
    description: "Relax as we transport your goods via air, sea, or land..",
    bgColor: "bg-orange-500",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "Clear & Deliver",
    description:
      "We manage customs clearance, duties, and final-mile delivery..",
    bgColor: "bg-orange-500",
    textColor: "text-white",
  },
];
export default function ServicesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center mt-20 flex-col gap-10">
      <div className="max-w-screen-lg w-full py-10 px-6">
        <FadeInWhenVisible>
          <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-black tracking-tight max-w-xl md:text-center md:mx-auto">
            What Service do you need?
          </h2>
        </FadeInWhenVisible>

        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {services.map((service, index) => (
            <FadeInWhenVisible key={service.id}>
              <div className="flex flex-col xl:flex-row items-center gap-x-20 gap-y-6 xl:odd:flex-row-reverse">
                <motion.div
                  className="basis-1/2 shrink-0"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className=" max-w-full sm:max-w-[50%] sm:object-center mx-auto xl:max-w-full h-auto"
                  />
                </motion.div>
                <div className="basis-1/2 shrink-0">
                  <h4 className="my-3 text-3xl font-bold tracking-tighter">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground text-[17px]">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <section className="flex justify-center items-center w-full bg-[#FEF6EE] my-12 py-10 font-sans">
        <div className="w-full max-w-5xl text-center">
          <FadeInWhenVisible>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Your Shipping Roadmap
            </h2>
            <p className="text-muted-foreground mb-8">
              4 Steps. Zero Stress. Guaranteed Delivery.
            </p>
          </FadeInWhenVisible>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-24">
            <div className="space-y-6 w-full md:w-1/2">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6"
              >
                {processSteps.map((step) => (
                  <motion.div
                    key={step.id}
                    variants={fadeInUp}
                    className="p-4 rounded-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`text-lg font-bold flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center border ${step.bgColor} ${step.textColor}`}
                      >
                        {step.id}
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-black">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="w-full md:w-1/2">
              <FadeInWhenVisible variants={fadeIn}>
                <img
                  src={ShippingRoadmapImage}
                  alt="Delivery process illustration"
                  className="w-full h-auto"
                />
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-orange-50">
        <div className="container mx-auto px-6 text-center">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our freight forwarding services
              can meet your specific needs and support your business or personal
              requirements.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700"
            >
              Get a Quote
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}
