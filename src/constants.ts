export const MY_LINKED_IN_URL =
  "https://www.linkedin.com/in/alexander-bryakin-85a903204/";
export const MY_INSTAGRAM_URL = "https://www.instagram.com/digitoider";
export const MY_VK_URL = "https://vk.com/holdthefuckingdoor";
export const MY_EMAIL = "digitoider@gmail.com";

type PeriodItem = {
  year: number;
  month: number;
  monthHumanReadable: string;
};
type ExperienceItem = {
  id: number;
  isParallelToID: number | null;
  period: {
    from: PeriodItem;
    to: PeriodItem;
  };
  company: {
    name: string;
    website: string;
  };
  skills: string[];
  responsibilities: string[];
};

const PRESENT: PeriodItem = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  monthHumanReadable: new Date().toLocaleString("default", { month: "long" }),
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    isParallelToID: null,
    period: {
      from: {
        year: 2018,
        month: 5,
        monthHumanReadable: "May",
      },
      to: {
        year: 2019,
        month: 6,
        monthHumanReadable: "June",
      },
    },
    company: {
      name: "Aviakassa",
      website: "https://www.aviakassa.com",
    },
    skills: [
      "Ruby on Rails 5 (API)",
      "Redis",
      "PostgreSQL",
      "RSpec",
      "JavaScript",
    ],
    responsibilities: [
      `Building features that work with APIs of different Global Distribution Systems, extracting data and processing it`,
      `Maintaining and troubleshooting existing functionality`,
      `Increasing the test coverage`,
      `Created a gem github.com/digitoider/hasher`,
    ],
  },

  {
    id: 2,
    isParallelToID: null,
    period: {
      from: {
        year: 2020,
        month: 6,
        monthHumanReadable: "June",
      },
      to: {
        year: 2022,
        month: 3,
        monthHumanReadable: "March",
      },
    },
    company: {
      name: "AquivaLabs / Groups360",
      website: "https://groups360.com",
    },
    skills: [
      "React",
      "TypeScript",
      "Ruby on Rails (v5)",
      "PostgreSQL",
      "RSpec",
    ],
    responsibilities: [
      `Architecture design and implementation`,
      `Developing front-end microservices with React and TypeScript`,
      `Developing functionality for back-end microservices using RoR. RSpec tests`,
      `Front-end integration with the internal API`,
      `Deep Code Reviews`,
      `Mentoring Newcomers`,
    ],
  },

  {
    id: 3,
    isParallelToID: 2,
    period: {
      from: {
        year: 2021,
        month: 6,
        monthHumanReadable: "June",
      },
      to: {
        year: 2021,
        month: 11,
        monthHumanReadable: "November",
      },
    },
    company: {
      name: "Credit Glory",
      website: "https://www.creditglory.com",
    },
    skills: ["React", "Ruby on Rails (MVC)", "Minitest", "Capybara"],
    responsibilities: [
      `Develop new components and functionality for the Twilio plugin`,
      `Adjustments and fixes for existing functionality`,
      `API integrations`,
      `Test coverage`,
    ],
  },

  {
    id: 4,
    isParallelToID: null,
    period: {
      from: {
        year: 2022,
        month: 4,
        monthHumanReadable: "April",
      },
      to: PRESENT,
    },
    company: {
      name: "Archive",
      website: "https://archive.com/",
    },
    skills: [
      "React",
      "TypeScript",
      "Ruby on Rails (v7)",
      "PostgreSQL",
      "RSpec",
    ],
    responsibilities: [
      `Collaboration with other stakeholders within Engineering (Frontend, UX, etc.) to reach company goals`,
      `Owning projects from concept to production, including proposal, discussion, and execution`,
      `Deep Code Reviews`,
    ],
  },
];
