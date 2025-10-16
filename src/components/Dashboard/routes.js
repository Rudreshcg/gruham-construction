import About from "../About/About";
import Services from "../Services/Services";
import Blogs from "../Blogs/Blogs";
import Careers from "../Careers/Careers";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import ProjectPage from "../Pages/ProjectPage"; // dynamic page

export const routes = [
  { name: "Home", component: Home, path: "" },
  { name: "About", component: About, path: "about" },
  { name: "Services", component: Services, path: "services" },
  { name: "Careers", component: Careers, path: "careers" },
  { name: "Portfolio", component: Portfolio, path: "portfolio" },
  { name: "ProjectPage", component: ProjectPage, path: "portfolio/:projectId" }, // dynamic route
  { name: "Blogs", component: Blogs, path: "blogs" },
  { name: "Contact", component: Contact, path: "contact" },
];
