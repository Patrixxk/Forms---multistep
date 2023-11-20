import { FormWrapper } from "./FormWrapper";

type UserData = { email: string; password: string };

type AccountFormProps = UserData & {
  email: string;
  password: string;
  updateFields: (fields: Partial<UserData>) => void;
};

export const AccountForm = ({
  email,
  password,
  updateFields,
}: AccountFormProps) => {
  return (
    <FormWrapper title="Create Account">
      <label htmlFor="">Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => {
          return updateFields({ email: e.target.value });
        }}
      />
      <label htmlFor="">Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => {
          return updateFields({ password: e.target.value });
        }}
      />
    </FormWrapper>
  );
};
