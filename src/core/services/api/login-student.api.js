import { setItem } from '../storage/storage';
import newAxios from '../interceptor/interceptor';
import { toast } from 'react-toastify';

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const loginUser = async (object) => {
   
   try {
      const result = await newAxios.post(
         `${MainUrl}auth/login`,
         object
      );

      if ( result && result.data && result.data.result) {
         const token = result.data.result.jwtToken;
         const user = result.data.result.studentModel;

         setItem('token', token);
         setItem('user', JSON.stringify(user));
      }
      
      return result.data.result;
   } catch (error) {
      // notify(error.response.data.message.message[0].message, "danger")
      // console.log(error.response.data.message.message[0].message);
      toast.error(error.response.data.message.message[0].message)
      return false;
      // console.log(error);
   }
}

export default loginUser