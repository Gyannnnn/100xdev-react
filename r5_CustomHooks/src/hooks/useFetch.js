import { useEffect, useState } from "react";

export function usePostTitle() {
    const [post, Setpost] = useState({});

    async function getPosts() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        Setpost(data);
    }

    useEffect(() => {
        getPosts();
    }, []);
    return post.title
}

export function useFetch(url) {
    const [finalData, SetFinalData] = useState({});

    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        SetFinalData(json);


    }

    useEffect(() => {
        fetchData();
    },)

    return {
        finalData
    }
}