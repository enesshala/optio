export type ShowcaseProject = {
  name: string;
  url: string;
  description: string;
  tag: string;
  image: string;
  /** When set, Projects card links to the Optio collab page instead of the live site */
  slug?: string;
};

export const showcases: ShowcaseProject[] = [
  {
    name: "AromaDream",
    url: "https://aromadream-ks.com",
    description:
      "Fragrance brand storefront for home, car, and space scents — warm product storytelling built for Kosovo shoppers.",
    tag: "E-commerce",
    image: "/images/projects/aromadream.png",
    slug: "aromadream",
  },
  {
    name: "Plus Trade",
    url: "https://plustrade-ks.com",
    description:
      "Electrical services company site with clear service offers, trust signals, and a path to request work.",
    tag: "Business",
    image: "/images/projects/plustrade.png",
    slug: "plustrade",
  },
  {
    name: "HARKU",
    url: "https://harku-ks.com",
    description:
      "Heating, climate, ventilation, and water installation brand — professional services site for Kosovo homes and businesses.",
    tag: "Services",
    image: "/images/projects/harku.png",
    slug: "harku",
  },
  {
    name: "classroomX",
    url: "https://classroom-x.com",
    description:
      "Live coding classroom product — real-time editor sync so students follow the teacher’s workspace in the browser.",
    tag: "Product",
    image: "/images/projects/classroomx.png",
  },
];
