import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import FormRow2 from "../../ui/FormRow2";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import useUser from "./useUser";
import useUpdateUser from "./useUpdateUser";

function UpdateUserDataForm() {
  const { user = {} } = useUser();
  const { update } = useUpdateUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name || "",
      address: user.address || "",
      phoneNumber: user.phoneNumber || "",
    },
  });

  useEffect(() => {
    reset(user);
  }, [user]);

  const onSubmit = (data) => {
    update(data);
  };

  function handleCancel(e) {
    e.preventDefault();
    reset(user);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow2 label="Email address">
        <Input defaultValue={user.userEmail} disabled />
      </FormRow2>
      <FormRow2 label="Name">
        <Input {...register("name")} type="text" id="name" />
        {errors.name && <p>{errors.name.message}</p>}
      </FormRow2>
      <FormRow2 label="Address">
        <Input {...register("address")} type="text" id="address" />
        {errors.address && <p>{errors.address.message}</p>}
      </FormRow2>
      <FormRow2 label="Phone number">
        <Input
          {...register("phoneNumber", {
            maxLength: { value: 10, message: "Maximum 10 characters." },
            pattern: { value: /^[0-9]*$/, message: "Only numbers." },
          })}
          type="text"
          id="phone"
          maxLength={10}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </FormRow2>

      <FormRow2 type="hasbutton">
        <Button type="button" variation="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="submit">Update account</Button>
      </FormRow2>
    </Form>
  );
}

export default UpdateUserDataForm;
