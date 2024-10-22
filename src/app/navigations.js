export const navigations = [
  { name: "Home", path: "/dashboard/default", icon: "home" },
  { label: "PAGES", type: "label" },
  {
    name: "Session/Auth",
    icon: "security",
    children: [
      { name: "Sign in", iconText: "SI", path: "/session/signin" },
      { name: "Sign up", iconText: "SU", path: "/session/signup" },
      { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
      { name: "Error", iconText: "404", path: "/session/404" }
    ]
  },
  {
    name: "Core Pages",
    icon: "pages",
    //badge: { value: "30+", color: "secondary" },
    children: [
      { name: "Learn more", path: "/material/autocomplete", iconText: "A" },
      { name: "The toolkit", path: "/material/buttons", iconText: "B" },
      { name: "Prices and company license", path: "/material/checkbox", iconText: "C" },
      { name: "Training and consultancy", path: "/material/dialog", iconText: "D" },
      { name: "Case Studies and research", path: "/material/expansion-panel", iconText: "E" },
    ]
  },
  {
    name: "Support Links",
    icon: "info",
    children: [
      { name: "Contact us", path: "/material/form", iconText: "F" },
      { name: "FAQ", path: "/material/table", iconText: "T" },
      { name: "Site Map", path: "/material/menu", iconText: "M" },
      { name: "Privacy Policy", path: "/material/progress", iconText: "P" },
      { name: "Terms & Conditions", path: "/material/radio", iconText: "R" },
    ]
  },
];
