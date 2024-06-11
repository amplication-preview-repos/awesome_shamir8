import { Address } from "../address/Address";

export type Profile = {
  address?: Address | null;
  birthDate: Date | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
