import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type ProfileCreateInput = {
  address?: AddressWhereUniqueInput | null;
  birthDate?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
