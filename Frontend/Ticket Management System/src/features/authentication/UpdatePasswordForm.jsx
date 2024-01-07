import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow2 from "../../ui/FormRow2";
import Input from "../../ui/Input";
import useUpdateUser from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const { update } = useUpdateUser();

  function onSubmit(data) {
    const { password, passwordConfirm } = data;

    if (password === passwordConfirm) {
      update({ name: null, address: null, phoneNumber: null, password });

      reset();
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow2
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow2>

      <FormRow2
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow2>
      <FormRow2 type="hasbutton">
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button>Update password</Button>
      </FormRow2>
    </Form>
  );
}

export default UpdatePasswordForm;
