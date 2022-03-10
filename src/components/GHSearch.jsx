import React, { useState } from "react";
import axios from "axios";
import { Button, Input } from "semantic-ui-react";

const GHSearch = () => {
  const [user, setUser] = useState("");
  const { value } = thia.input;
  const fetchUser = async () => {
    axios.get(`api.github.com/users/=${value}`).then(
      (response) => {
        useState({ users: response.data.items });
      },
      (error) => {
        alert(error);
      }
    );
  };
  if (this.input.value === "") {
    alert("enter null");
    return;
  }
  return (
    <>
    <Modal
      useState={() => setUser("")}
      user={user}>
    </Modal>
      <Input type="text" name="search" placeholder="Input GH username" />
      <Button onClick={fetchUser} data-cy="search">
        Search
      </Button>
    </>
  );
};

export default GHSearch;
