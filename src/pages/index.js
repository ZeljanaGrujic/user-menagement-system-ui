import AddUser from "components/AddUser";
import Navbar from "components/Navbar";
import UserList from "components/UserList";
import Head from "next/head";
import Login from "components/Login";
import React from "react";
import { getSession } from "next-auth/react";

export default function Home() {
   return <Login></Login>;


}

