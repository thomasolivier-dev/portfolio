export interface Techno {
  id: string;
  name: string;
  imagePath: string;
  description: string;
}

export interface TechnoSkill {
  name: string;
  imagePath: string;
  rating: number;
}

export interface TechnoSkillData {
  [key: string]: TechnoSkill[];
}