export type JobType = "Contract" | "C2H" | "Direct";
export type Vertical =
  | "Information Technology"
  | "Life Sciences & Biotech"
  | "Insurance";

export interface Job {
  id:       string;
  title:    string;
  type:     JobType;
  location: string;
  vertical: Vertical;
  posted:   string;  // ISO date string, e.g. "2026-04-17"
  featured: boolean; // show in homepage hero card
}
