import newAxios from '../interceptor/interceptor';

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const AddStudentToCourses = async (userId, id) => {
   try {
      const result = await newAxios.post(
         `${MainUrl}course/addStudentToCourse/${userId}`,
         {
            courseId: id
         }
      );
      
      
      return result.data.result;
   } catch (error) {
      
      return false;
   }
}

export default AddStudentToCourses
