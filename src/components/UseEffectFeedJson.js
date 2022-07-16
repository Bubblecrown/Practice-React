import React, { useState, useEffect } from "react";
import axios from "axios";
export default function UseEffectFeedJson() {
  const [dataArray, setDataArray] = useState(null);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      const { data } = result;
      console.log(result.data);
      // alert(JSON.stringify(result.data));
			setDataArray(data)
    });
  }, []);

  return (<div><p>#debug {JSON.stringify(dataArray)}</p></div>);
}
