import newAxios from '../interceptor/interceptor';
import { toast } from 'react-toastify';

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const EditStudentInfo = async (userId, object) => {
   
   try {
      const result = await newAxios.put(
         `${MainUrl}student/${userId}`,
         object
      );

      return result.data.result;
   } catch (error) {
      toast.error(error.response.data.message[0].message);
      return false;
   }
}

export default EditStudentInfo