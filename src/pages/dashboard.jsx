import React, { useContext } from 'react'
import AuthContext from "../context/authContext";
import {  useLoaderData } from "react-router-dom";


export default function Dashboard(props) {
  const user = useContext(AuthContext);
  const loaderData = useLoaderData();
  console.log('props',props)
  console.log('loaderData',loaderData)

  return (
    <div id="error-page">
      <h1>Hii , '{ user.auth.username }' from context API</h1>

    </div>
  );
}