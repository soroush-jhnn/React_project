import newAxios from '../interceptor/interceptor';
// import axios from 'axios'
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const GetTopNews = async () => {
   try {
      const result = await newAxios.get(
         `${MainUrl}news/topNews`
      );

      return result.data.result;
   } catch (error) {
      return false;
   }
}

export default GetTopNews
