import { FormWrapper } from "./FormWrapper";
type UserData = { street: string; city: string; state: string; zip: string };

type AddressFormProps = UserData & {
  street: string;
  city: string;
  state: string;
  zip: string;
  updateFields: (fields: Partial<UserData>) => void;
};
export const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Address Details">
      <label htmlFor="">Street</label>
      <input
        autoFocus
        required
        type="text"
        name="text"
        id=""
        value={street}
        onChange={(e) => {
          return updateFields({ street: e.target.value });
        }}
      />
      <label htmlFor="">City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => {
          return updateFields({ city: e.target.value });
        }}
      />
      <label htmlFor="">State</label>
      <input
        type="text"
        name=""
        id=""
        value={state}
        onChange={(e) => {
          return updateFields({ state: e.target.value });
        }}
      />
      <label htmlFor="">Zip</label>
      <input
        required
        type="number"
        value={zip}
        onChange={(e) => {
          return updateFields({ zip: e.target.value });
        }}
      />
    </FormWrapper>
  );
};
