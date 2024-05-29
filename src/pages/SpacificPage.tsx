import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const SpacificPage = () => {
  const [singleData, setSingleData] = useState<any>({});
  const param = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${param?.id}`)
      .then((res) => {
        console.log(res);
        setSingleData({ ...res?.data });
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  }, [singleData]);

  console.log(singleData);

  return (
    <div>
      <Typography component={"h6"}>{singleData?.id}</Typography>
      <Typography component={"h6"}>{singleData?.name}</Typography>
      <Typography component={"h6"}>{singleData?.email}</Typography>
      <Typography component={"h6"}>{singleData?.body}</Typography>
    </div>
  );
};

export default SpacificPage;
