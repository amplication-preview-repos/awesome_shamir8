import { ProfileCreateNestedManyWithoutAddressesInput } from "./ProfileCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  city?: string | null;
  country?: string | null;
  postalCode?: string | null;
  profiles?: ProfileCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  street?: string | null;
};
