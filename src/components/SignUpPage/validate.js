
export  const validate = data => {
   const errors = {};

   if(!data.name.trim()){
      errors.name = "Username required"
   } else {
      delete errors.name
   }

   if(!data.email) {
      errors.email = "Email required"
   } else if(!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid"
   } else {
      delete errors.email
   }

   if(!data.phone) {
      errors.phone = "Phone required"
   } else if(!/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(data.phone)) {
      errors.phone = "Phone address is invalid"
   } else {
      delete errors.phone
   }

   if(!data.id_code) {
      errors.id_code = "Id-code required"
   } else if(!/\b\d{10}\b/.test(data.id_code)) {
      errors.id_code = "Id-code address is invalid"
   } else {
      delete errors.id_code
   }

   if(!data.birthday) {
      errors.birthday = "Birthday required"
   } else {
      delete errors.birthday
   }

   if(!data.password) {
      errors.password = "Password required"
   } else if(data.password.lenght < 6) {
      // why data.password.lenght is undefined ? :/
      errors.password = "Password must be at least 6 characters"
   } else {
      delete errors.password
   }

   if(!data.confirmPassword) {
      errors.confirmPassword = "Confirm your password"
   } else if(data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password do not match"
   } else {
      delete errors.confirmPassword
   }

   if(data.isAccepted) {
      delete errors.isAccepted
   } else {
      errors.isAccepted = "Accept our policy"
   }

   return errors;
}
