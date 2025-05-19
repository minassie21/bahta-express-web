import OceanFreignImage from "@/assets/services/OceanFreight.png";
import AirFreigImage from "@/assets/services/AirFreight.png";
import CustomsImage from "@/assets/services/Customs.png";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: "ocean-freight",
    title: "Ocean Freight Solutions",
    description:
      "LCL, FCL Shipments via ESL, China to Ethiopia Ports. Break Bulk/Heavy Lift Experience, Compliant with Import and Export Regulation.",
    image: OceanFreignImage,
  },
  {
    id: "air-freight",
    title: "Air Freight Cargo",
    description:
      "Competitive Air cargo Via Ethiopian, Saudi, Emirates Airlines from major Chinese cities to Addis Ababa. Guaranteed space, Rapid Transit.",
    image: AirFreigImage,
  },
  {
    id: "customs-compliance",
    title: "Customs and Regulatory compliance",
    description:
      "Expert China-Ethiopia export and import Customs documentation. Duty optimization strategies minimize delays and avoid penalities.",
    image: CustomsImage,
  },
];

interface LogisticsService {
  title: string;
  description: string;
}

const logisticsServices: LogisticsService[] = [
  {
    title: "Warehouse Services",
    description:
      "Cargo Consolidation, storage, inventory management and cross-docking, ensuring efficient Ethiopia-bound Logistics with Flexible, scalable solutions for diverse shipment needs.",
  },
  {
    title: "Pre-Shipment Verification of conformity (PVOC) ",
    description:
      "We expertly prepare PVOC Documentation required by Ethiopian Standards from Bureau Veritas and Contenca, ensuring compliance with Ethiopian standards and seamless customs clearance for your shipments.",
  },
  {
    title: "Human Network Air cargo solutions ",
    description:
      "We utilize trusted personnel and airline staff networks to securely transport items from Guangzhou,Chengdu or Shanghai to Addis Ababa,ensuring personalized handling and seemless coordination at every transit point",
  },
];

export { services, logisticsServices };
export type { Service, LogisticsService };
