export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// TODO: 替換為真實作品資料
export const projects: Project[] = [
  {
    id: "1",
    title: "作品名稱 1",
    description: "簡短描述這個作品的目的，以及你解決了什麼問題。盡量說明技術亮點或對使用者的價值。",
    technologies: ["Flutter", "Firebase", "Dart"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "2",
    title: "作品名稱 2",
    description: "簡短描述這個作品的目的，以及你解決了什麼問題。盡量說明技術亮點或對使用者的價值。",
    technologies: ["Flutter", "REST API", "Dart"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: "3",
    title: "作品名稱 3",
    description: "簡短描述這個作品的目的，以及你解決了什麼問題。盡量說明技術亮點或對使用者的價值。",
    technologies: ["Astro", "TypeScript", "Sanity"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
];
