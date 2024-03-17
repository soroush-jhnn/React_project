import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const id_codeRegExp = /\b\d{8,16}\b/;

export const validation = Yup.object().shape({
  isAccepted: Yup.boolean().oneOf([true], "Message"),
  fullName: Yup.string()
    .required("نام نمی تواند خالی باشد")
    .min(4, "min error")
    .max(30, "max error")
    .trim(),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "valid error")
    .required("required")
    .min(12, "min error")
    .max(12, "max error"),
  nationalId: Yup.string()
    .matches(id_codeRegExp, "valid error")
    .required("required")
    .min(10, "min error")
    .max(10, "max error"),
  birthDate: Yup.string()
    .min(10, "min error")
    .max(10, "max error")
    .required("required"),
  email: Yup.string().email("invalid error").required("required"),
  password: Yup.string()
    .min(8, "min error")
    .max(25, "max error")
    .required("required")
    .minLowercase(1, "lower case error")
    .minUppercase(1, "upper case error")
    .minNumbers(1, "number error")
    .minSymbols(1, "special character error"),
  confirmPassword: Yup.string()
    .required("required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});