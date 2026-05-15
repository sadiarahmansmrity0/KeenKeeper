"use client"
import React, { useEffect, useState } from "react";
const useHooks = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            setTimeout(() => {
                setFriends(data);
                setLoading(false);
            }, 500);
        }


        fetchdata();

    }, [])

    return { loading, friends }
};

export default useHooks;
