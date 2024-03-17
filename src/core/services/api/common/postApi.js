import newAxios from '../../interceptor/interceptor';
import { toast } from 'react-toastify';

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const loginUser = async (url, object) => {
   
   try {
      const result = await newAxios.post(
         MainUrl + url,
         object
      );
      
      return result.data.result;
   } catch (error) {
      toast.error(error.response.data.message.message[0].message)
      return false;
      
   }
}

export default loginUser