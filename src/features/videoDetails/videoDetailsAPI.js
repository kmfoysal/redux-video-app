import axiosInstance from "../../utils/axios";

export const getVideoDetails = async (id) => {
    
  const response = await axiosInstance.get(`/videos/${id}`);

  return response.data;
};
