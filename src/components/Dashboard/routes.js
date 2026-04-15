import OurStory from "../About/OurStory";
import Services from "../Services/Services";
import Blogs from "../Blogs/Blogs";
import BlogDetail from "../Blogs/BlogDetail";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import ProjectPage from "../Pages/ProjectPage"; // dynamic page
import Publications from "../Publications/Publications";
import Careers from "../Careers/Careers";
import Packages from "../Packages/Packages";

export const routes = [
  { name: "Home", component: Home, path: "" },
  { name: "Our Story", component: OurStory, path: "about" },
  { name: "Teams", component: OurStory, path: "teams" },
  { name: "Services", component: Services, path: "services" },
  { name: "Portfolio", component: Portfolio, path: "portfolio" },
  { name: "ProjectPage", component: ProjectPage, path: "portfolio/:projectId" }, // dynamic route
  { name: "Packages", component: Packages, path: "packages" },
  { name: "Blogs", component: Blogs, path: "blogs" },
  { name: "BlogDetail", component: BlogDetail, path: "blogs/:slug" }, // dynamic route
  { name: "Publications", component: Publications, path: "publications" },
  { name: "Careers", component: Careers, path: "careers" },
  { name: "Contact", component: Contact, path: "contact" },
];
