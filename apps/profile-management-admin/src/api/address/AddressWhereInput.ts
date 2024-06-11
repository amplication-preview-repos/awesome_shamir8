import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  postalCode?: StringNullableFilter;
  profiles?: ProfileListRelationFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
};
