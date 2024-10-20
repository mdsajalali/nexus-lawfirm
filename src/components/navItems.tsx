interface NavLinkProps {
  label: string;
  link: string;
}

const navLinks: NavLinkProps[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Practice Areas",
    link: "/skills",
  },
  {
    label: "Attorneys",
    link: "/projects",
  },
  {
    label: "Blog",
    link: "/blogs",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export default navLinks;
