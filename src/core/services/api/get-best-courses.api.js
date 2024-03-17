import newAxios from '../interceptor/interceptor';
// import axios from 'axios'
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const GetTopCourses = async () => {
   try {
      const result = await newAxios.get(
         `${MainUrl}course/getall`
      );

      return result.data.result;
   } catch (error) {
      return false;
   }
}

export default GetTopCourses
