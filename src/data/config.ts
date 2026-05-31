const config = {
  title: "Siddharth Singh | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Siddharth Singh, a B.Tech Computer Science student and full-stack developer passionate about building web experiences with modern technologies like React, Next.js, Node.js, and more.",
    short:
      "Portfolio of Siddharth Singh — a CS student and full-stack developer who loves to code and build things.",
  },
  keywords: [
    "Siddharth Singh",
    "portfolio",
    "full-stack developer",
    "web development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "B.Tech",
    "Computer Science",
    "Galgotias University",
  ],
  author: "Siddharth Singh",
  email: "sidd57165@gmail.com",
  site: "https://siddharthsingh.dev",

  // for github stars button
  githubUsername: "siddharthsingh2698",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com",
    linkedin: "https://www.linkedin.com/in/siddharth-singh-563a67348",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    github: "https://github.com/siddharthsingh2698",
  },
};
export { config };
