import React from "react";

import { GroupContainer, FormInputContainer, Label } from "./form-input.styles";

const FormInput = ({ handleChange, label, ...restProps }) => {
  return (
    <GroupContainer className='group'>
      <FormInputContainer onChange={handleChange} {...restProps} />
      {label ? (
        <Label className={restProps.value.length ? "shrink" : ""}>{label}</Label>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
