import { Profile } from "../profile/Profile";

export type Address = {
  city: string | null;
  country: string | null;
  createdAt: Date;
  id: string;
  postalCode: string | null;
  profiles?: Array<Profile>;
  state: string | null;
  street: string | null;
  updatedAt: Date;
};
