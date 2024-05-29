import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Components/Table";

export default function APIHandlingScreen() {
  const [usersList, setUsersList] = useState<any>([]);

  const getApiData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        console.log(res);
        setUsersList([...res.data]);
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };

  useEffect(() => {
    getApiData();
  }, [usersList]);

  return (
    <>
      <Box component={"div"}>
        <Table
          gridCols={[
            {
              key: "id",
              label: "User Id",
            },
            {
              key: "name",
              label: "User Name",
            },
            {
              key: "email",
              label: "User Email",
            },
            {
              key: "",
              label: "View",
              displayField: (rows:any) => (
               <Box>
                <Button
                color="info"
                href={`/user-id/${rows?.id}`}
                sx={{fontSize:'13px' ,marginLeft:'10px',marginRight:'10px'}}
                variant="text"
                >
                View
              </Button>
              </Box>
              ),
            },
            {
              key: "",
              label: "Delete",
              displayField: (rows:any) => (
               <Box>
                <Button
                color="success"
                sx={{fontSize:'15px' ,marginLeft:'10px',marginRight:'10px',}}
                variant="text"
                >
                Delete
              </Button>
              </Box>
              ),
            },
           
           
          ]}
          datasource={usersList}
        />
      </Box>
    </>
  );
}
