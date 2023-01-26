import { useSession, signIn, signOut } from "next-auth/react"
import AddUser from "components/AddUser";
import Navbar from "components/Navbar";
import UserList from "components/UserList";
import Head from "next/head";
export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6" onClick={() => signOut()}>Sign out</button>
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
    )
  }
  return (
    <>
      You are not signed in <br />
      <button className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6" onClick={() => signIn()}>Sign in</button>
    </>
  )
}
