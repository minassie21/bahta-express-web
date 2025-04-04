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
    title: "Cracking Ethiopia's delivery market",
    excerpt:
      "The history of digital delivery services in Ethiopia is rather short, especially when compared to other big African economies. Learn how Bahta Express is pioneering change in this emerging market.",
    image: PostImageOne,
    link: "https://www.dhl.com/gt-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html",
    author: "Tadesse Hailu",
    publishDate: "March 15, 2024",
  },
  {
    id: "blog-2",
    title: "Trials and tribulations of delivery businesses",
    excerpt:
      "Founded in September 2017, Bahta Express is a pioneer and one of the successful startups in tech-based delivery businesses. This article explores the challenges faced and lessons learned in the Ethiopian logistics sector.",
    image: PostImageTwo,
    link: "https://fiata.org/about-freight-forwarding/",
    author: "Yeabsira Teklu",
    publishDate: "February 8, 2024",
  },
  {
    id: "blog-3",
    title: "Revolutionising Last Mile Delivery in Ethiopia",
    excerpt:
      "Ethiopian logistics startup Bahta Express has raised funding from the Addis Ababa Angels (AAA) Network as it looks to expand across the country. Discover how this investment is transforming local logistics infrastructure.",
    image: PostImageThree,
    link: "https://www.thereporterethiopia.com/39271/",
    author: "Hiwot Solomon",
    publishDate: "January 22, 2024",
  },
];

export { blogs };