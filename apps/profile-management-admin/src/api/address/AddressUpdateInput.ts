import { ProfileUpdateManyWithoutAddressesInput } from "./ProfileUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  city?: string | null;
  country?: string | null;
  postalCode?: string | null;
  profiles?: ProfileUpdateManyWithoutAddressesInput;
  state?: string | null;
  street?: string | null;
};
