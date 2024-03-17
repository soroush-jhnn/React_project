import newAxios from '../interceptor/interceptor';
import { toast } from 'react-toastify';

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const DeleteStudentToCourses = async (userId, id) => {
   try {
      const result = await newAxios.post(
         `${MainUrl}course/removeStudentFromCourse/${userId}`,
         {
            courseId: id
         }
      );
      
      toast.success('درس با موفقیت حذف شد')
      return result.data.result;
   } catch (error) {
      toast.error(error.response.data.message[0].message)
      return false;
   }
}

export default DeleteStudentToCourses
