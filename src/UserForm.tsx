import { FormWrapper } from "./FormWrapper";

type UserData = { firstName: string; lastName: string; age: string };

type UserFormProps = UserData & {
  firstName: string;
  lastName: string;
  age: string;
  updateFields: (fields: Partial<UserData>) => void;
};

export const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="">First Name</label>
      <input
        autoFocus
        required
        type="text"
        name="text"
        id=""
        onChange={(e) => updateFields({ firstName: e.target.value })}
        value={firstName}
      />
      <label htmlFor="">Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor="">Age</label>
      <input
        onChange={(e) => updateFields({ age: e.target.value })}
        required
        type="number"
        min={18}
        name=""
        id=""
        value={age}
      />
    </FormWrapper>
  );
};
