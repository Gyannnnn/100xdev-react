import React, { useEffect, useState } from "react";
import { useFetch, usePostTitle } from "./hooks/useFetch";

export default function UseFetchHook() {
const postTitle = usePostTitle();
const {finalData} = useFetch("https://jsonplaceholder.typicode.com/posts/1")

  return <div>
    {
        JSON.stringify(finalData)
    }
  </div>;
}
