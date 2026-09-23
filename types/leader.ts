export interface Leader {
  id: string;
  image: string;
  name: string;
  title: string;
  status: "director" | "trustee" | "supportTeam" | string;
  department: string;
  longBio: string;
  empowermentQuote: string;
  achievements: string[];
  education: string;
  socialMedia: {
    ig: string;
    x: string;
    linkedIn: string;
    facebook: string;
    email: string;
  };
  gallery: string[];
}
