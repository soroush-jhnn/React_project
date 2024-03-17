import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const loginValidation = Yup.object().shape({
   email: Yup.string()
     .email("ایمیل معتبر نمی باشد")
     .required("ایمیل نمی تواند خالی باشد"),
   password: Yup.string()
     .min(8, "کمتر از حد مجاز")
     .max(25, "بیشتر از حد مجاز")
     .required("پسورد نمی تواند خالی باشد")
     .minLowercase(1, "حداقل یک حرف کوچک نیاز است")
     .minUppercase(1, "حداقل یک حرف بزرگ نیاز است")
     .minNumbers(1, "حداقل یک عدد نیاز است")
     .minSymbols(1, "حداقل یک نماد نیاز است"),
 });

