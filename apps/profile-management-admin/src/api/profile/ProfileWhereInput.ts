import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProfileWhereInput = {
  address?: AddressWhereUniqueInput;
  birthDate?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
