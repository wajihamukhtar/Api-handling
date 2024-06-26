import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Components/Table";
import { Link } from "react-router-dom";

export default function APIHandlingScreen() {
  const [usersList, setUsersList] = useState<any>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setUsersList([...res.data]);
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  }, []);

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
              displayField: (rows: any) => (
                <Box>
                  <Link
                    color="info"
                    to={`/user-id/${rows?.id}`}
                    style={{
                      fontSize: "16px",
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "green",
                    }}
                  >
                    View
                  </Link>
                </Box>
              ),
            },
            {
              key: "",
              label: "Delete",
              displayField: (rows: any) => (
                <Box>
                  <Button
                    color="success"
                    sx={{
                      fontSize: "15px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
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
