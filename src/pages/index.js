import AddUser from "components/AddUser";
import Navbar from "components/Navbar";
import UserList from "components/UserList";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>User management App</title>
        </Head>
        <Navbar></Navbar>
        <main>
          <AddUser></AddUser>
        </main>
      </div>
    </>
  );
}
