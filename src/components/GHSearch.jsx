import React, { useState } from "react";
import axios from "axios";
import { Button, Input ,Modal} from "semantic-ui-react";

const GHSearch = () => {
  const [query, setQuery] =useState("");
  const performSearch = async()=>{
    const response = await axios.get('https://api.github.com/search/users',{params:{q:query}})
  }
  return
    <>
      <Modal useState={() => setUser("")} user={user}></Modal>
      <Input
        data-cy="search-field"
        type="text"
        name="search"
        placeholder="Input GH username"
      />
      <Button onClick={fetchUser} data-cy="search-botton" name="search" onClick={performSearch}>
        Search
      </Button>
    </>
};

export default GHSearch;
