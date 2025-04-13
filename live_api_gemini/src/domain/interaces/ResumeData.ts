export interface ResumeData {
  name: string;
  email: string;
  skills: string[];
  experience: {
    company: string;
    position: string;
    period: string;
  }[];
  education?: string;
}
