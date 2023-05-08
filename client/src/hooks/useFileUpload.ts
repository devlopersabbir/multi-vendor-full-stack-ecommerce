import { useState } from "react";
import { toast } from "react-hot-toast";
import { axiosPublic } from "../utils/axios/axios";
import axios from "axios";

const useFileUpload = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [images, setImages] = useState<Array<any>>([]);

  const upload = async (files: FileList | null) => {
    if (!files) return;

    const uploaders = Array.from(files).map(async (file: any) => {
      const data = new FormData();
      data.append("files", file);
      data.append("tags", "ecommerce-product");
      setLoading(true);
      return axiosPublic
        .post("/api/v1/files/uploads", data, {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Requested-With": "XMLHttpRequest",
          },
          withCredentials: true,
        })
        .then((res: any) => {
          toast.success("Image uploaded!");
          setLoading(false);
          setImages((prev) => [...prev, res.data]);
        })
        .catch((error) => {
          if (error) return setError(true);
        });
    });
    axios
      .all(uploaders)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        toast.error("Image upload fail!");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return {
    loading,
    upload,
    images,
    error,
  };
};

export default useFileUpload;
