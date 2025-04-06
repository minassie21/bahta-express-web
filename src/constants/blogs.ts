import PostImageOne from "@/assets/posts/VolumetricWeight.png";
import PostImageTwo from "@/assets/posts/fiata-social.png";
import PostImageThree from "@/assets/posts/Foreign-freighters.jpg";

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  author: string;
  publishDate: string;
}

const blogs: Blog[] = [
  {
    id: "blog-1",
    title: "Calculating Chargeable Weight by Air, Ocean, Road and Rail",
    excerpt:
      "Whichever is greater is a phrase to remember when calculating the cost of moving goods by air, ocean, road or rail...",
    image: PostImageOne,
    link: "https://www.dhl.com/gt-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html",
    author: "Tadesse Hailu",
    publishDate: "March 15, 2024",
  },
  {
    id: "blog-2",
    title: "What is freight forwarding and what do forwarders do?",
    excerpt:
      "Freight forwarding and logistic services are services of any kind relating to the carriage (performed by single mode or multimodal transport means),...",
    image: PostImageTwo,
    link: "https://fiata.org/about-freight-forwarding/",
    author: "Yeabsira Teklu",
    publishDate: "February 8, 2024",
  },
  {
    id: "blog-3",
    title: "Foreign freighters shy away from multimodal logistics operator bid",
    excerpt:
      "The list of companies awarded the first batch of multimodal logistics operator licenses in Ethiopia features ...",
    image: PostImageThree,
    link: "https://www.thereporterethiopia.com/39271/",
    author: "Hiwot Solomon",
    publishDate: "January 22, 2024",
  },
];

export { blogs };