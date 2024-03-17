
import axios from 'axios';

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const RegisterUser = async (object) => {
   try {
      const result = await axios.post(
         `${MainUrl}auth/register`,
         object
      );

      return result.data.result;
   } catch (error) {
      return null;
   }
}

export default RegisterUser