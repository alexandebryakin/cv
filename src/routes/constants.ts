type RouteDefinition = {
  path: string;
  title: string;
};

const HOME: RouteDefinition = {
  path: "/",
  title: "Home",
};
const ABOUT: RouteDefinition = {
  path: "/about",
  title: "About",
};
const EXPERIENCE: RouteDefinition = {
  path: "/experience",
  title: "Experience",
};
const CONTACTS: RouteDefinition = {
  path: "/contacts",
  title: "Contacts",
};

export const ROUTES = {
  HOME,
  EXPERIENCE,
  ABOUT,
  CONTACTS,
};
