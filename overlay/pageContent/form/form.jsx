import { FormInputs } from "./inputs";
import { RememberMe } from "./remember-me";
import { FormButton } from "./submit-button";
import { ErrorMessage } from "./error-message";
import { HelpLink } from "./help-link";
import styled from "styled-components";

export const Form =() => {
  return(
    <FormWrapper>
        <FormInputs/>
        <RememberMe/>
        <FormButton/>
        <ErrorMessage/>
        <HelpLink/>
    </FormWrapper>
  )
}

const FormWrapper=styled.form`
    display: flex;
    flex-direction: column;
    width: 440px;
    margin-top: 78px;
`