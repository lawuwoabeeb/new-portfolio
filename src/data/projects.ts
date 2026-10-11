export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  year: string;
  image: string;
  tags: string[];
  featured: boolean;
  linkText?: string;
}

export const projectsData: Project[] = [
  {
    id: "site-sync-workflow",
    title: "SiteSync Workflows",
    category: "Construction Tech",
    shortDescription: "A digital synchronization framework standardizing communication between structural field teams and design offices.",
    fullDescription: "SiteSync explores how real-time field reporting and digital checklists reduce delay loops in structural inspection workflows. Designed with a focus on intuitive mobile interfaces for civil site supervisors.",
    year: "2025",
    image: "/images/project-sitesync.svg",
    tags: ["Workflow Optimization", "Field Communication", "UX Design"],
    featured: true,
    linkText: "Explore Workflow Concept"
  },
  {
    id: "concrete-carbon-analyzer",
    title: "Structural Carbon Estimator",
    category: "Civil Engineering",
    shortDescription: "Interactive parametric tool estimating embodied carbon during early-stage structural element sizing.",
    fullDescription: "A preliminary calculation tool bridging structural efficiency with material sustainability. Allows structural engineers to evaluate embodied carbon trade-offs across varying concrete mix formulations and reinforcement densities.",
    year: "2025",
    image: "/images/project-carbon.svg",
    tags: ["Parametric Analysis", "Structural Design", "Sustainability"],
    featured: true,
    linkText: "View Calculation Framework"
  },
  {
    id: "site-logistics-map",
    title: "Construction Logistics Modeler",
    category: "Digital Tools",
    shortDescription: "Visual spatial planning tool for optimizing temporary site facility layouts on constrained urban build sites.",
    fullDescription: "Urban construction sites face severe spatial constraints. This project models crane radius coverage, material staging zones, and vehicle haul paths to prevent gridlock during peak foundation pours.",
    year: "2024",
    image: "/images/project-logistics.svg",
    tags: ["Site Logistics", "Spatial Planning", "Product Design"],
    featured: true,
    linkText: "View Spatial Concept"
  },
  {
    id: "prefab-assembly-tracker",
    title: "Modular Component Spec Tracker",
    category: "Product Design",
    shortDescription: "Standardized digital specification interface for tracking off-site prefabricated structural modules.",
    fullDescription: "An end-to-end specification system connecting off-site fabrication plants with assembly crews on-site. Ensures dimensional tolerances and installation sequences are verified prior to crane hoisting.",
    year: "2024",
    image: "/images/project-prefab.svg",
    tags: ["Modular Construction", "Prefabrication", "Spec Management"],
    featured: false,
    linkText: "Read Interface Study"
  },
  {
    id: "bim-data-bridge",
    title: "BIM Data Extractor",
    category: "Construction Tech",
    shortDescription: "Lightweight parser converting complex BIM metadata into actionable daily task lists for site engineers.",
    fullDescription: "Extracting site-relevant quantities from dense 3D models often requires heavy desktop software. This tool strips away excess model noise to deliver clean, mobile-accessible daily material summaries.",
    year: "2024",
    image: "/images/project-bim.svg",
    tags: ["BIM Metadata", "Data Extraction", "Site Management"],
    featured: false,
    linkText: "View Parser Design"
  }
];
