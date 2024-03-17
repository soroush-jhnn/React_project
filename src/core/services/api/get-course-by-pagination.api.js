import newAxios from '../interceptor/interceptor';

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const GetPageCourses = async () => {
   try {
      const result = await newAxios.get(
         `${MainUrl}course/list?pagenumber=${1}&pagesize=${5}`
      );

      return result.data.result.courses;
   } catch (error) {
      return false;
   }
}

export default GetPageCourses
