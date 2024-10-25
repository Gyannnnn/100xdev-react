import React, { useEffect, useState } from "react";
import { usePostTitle } from "./hooks/useFetch";

export default function UseFetchHook() {
const postTitle = usePostTitle()

  return <div>
    {
        postTitle
    }
  </div>;
}
