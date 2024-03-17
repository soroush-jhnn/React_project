import newAxios from '../interceptor/interceptor';

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const contactUs = async (object) => {
   try {
      const result = await newAxios.post(
         `${MainUrl}contactUs`,
         object
      );

      return result.data.result;
   } catch (error) {
      return false;
   }
}

export default contactUs
