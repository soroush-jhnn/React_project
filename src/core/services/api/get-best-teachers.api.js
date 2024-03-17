// import newAxios from '../interceptor/interceptor';
import axios from 'axios';

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const GetAllTeachers = async () => {
   try {
      const result = await axios.get(
         `${MainUrl}employee/getallteachers`
      );

      return result.data.result;
   } catch (error) {
      return false;
   }
}

export default GetAllTeachers
