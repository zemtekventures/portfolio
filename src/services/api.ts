// This is a mock API service that simulates fetching data from a cloud service
// In a real implementation, this would make actual API calls to your backend
import { heroData } from "../data/heroData";
import { servicesData } from "../data/servicesData";
import { whyChooseUsData } from "../data/whyChooseUsData";
import { projectsData } from "../data/projectsData";
import { testimonialsData } from "../data/testimonialsData";
import { toolsData } from "../data/toolsData";
import { aboutData } from "../data/aboutData";
import { contactData } from "../data/contactData";
// Simulate network delay for realistic API behavior
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const api = {
  // Hero section data
  getHeroData: async () => {
    await delay(300);
    return heroData;
  },
  // Services section data
  getServicesData: async () => {
    await delay(400);
    return servicesData;
  },
  // Why Choose Us section data
  getWhyChooseUsData: async () => {
    await delay(350);
    return whyChooseUsData;
  },
  // Projects showcase data
  getProjectsData: async () => {
    await delay(500);
    return projectsData;
  },
  // Testimonials data
  getTestimonialsData: async () => {
    await delay(450);
    return testimonialsData;
  },
  // Tools section data
  getToolsData: async () => {
    await delay(320);
    return toolsData;
  },
  // About section data
  getAboutData: async () => {
    await delay(380);
    return aboutData;
  },
  // Contact section data
  getContactData: async () => {
    await delay(300);
    return contactData;
  },
};
