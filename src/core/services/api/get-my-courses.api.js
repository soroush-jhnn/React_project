import newAxios from '../interceptor/interceptor';
// import axios from 'axios'
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const GetMyCourses = async (id) => {
   try {
      const result = await newAxios.get(
         `${MainUrl}student/${id}`
      );

      return result.data.result.courses;
   } catch (error) {
      return false;
   }
}

export default GetMyCourses
