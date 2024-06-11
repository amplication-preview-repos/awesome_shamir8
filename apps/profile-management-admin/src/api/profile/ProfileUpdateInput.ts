import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type ProfileUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  birthDate?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
