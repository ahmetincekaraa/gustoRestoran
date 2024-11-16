import Image from "next/image";
import React, { use } from "react";

import { useState } from "react";
import Account from "../../../components/profile/Account";
import Password from "../../../components/profile/Password";
import Orders from "../../../components/profile/Orders";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";


const Profile = ({user}) => {
  const {data: session} = useSession();
  const [tabs, setTabs] = useState(0);
  const { push } = useRouter();


  const handleSignOut = () => {
    if (confirm("Çıkış yapmak istediğinize emin misiniz?")) {
      signOut({ redirect: false });
      push("/login");
    }
  };

  

  return (
    <div className="flex px-10 min-h-[calc(100vh_-_425px)] lg:flex-row flex-col">
      <div className="lg:w-80 w-100 flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-8 border border-b-0">
          <Image
            src={user?.image ? user.image : "/images/admin.png"}
            alt=""
            width={100}
            height={100}
            className="rounded-full hover:border-2 hover:border-primary"
          />
          <b className="text-2xl mt-1 ">{user.fullName}</b>
        </div>
        <ul className="text-center font-semibold">
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-secondary hover:rounded-lg transition-all ${
              tabs === 0 && "bg-primary text-secondary rounded-lg"
            }`}
            onClick={() => setTabs(0)}
          >
            <i className="fa fa-home"></i>
            <button className="ml-1">Hesap</button>
          </li>
          <li
            className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-secondary hover:rounded-lg transition-all ${
              tabs === 1 && "bg-primary text-secondary rounded-lg"
            }`}
            onClick={() => setTabs(1)}
          >
            <i className="fa fa-key"></i>
            <button className="ml-1">Şifre</button>
          </li>
          <li
            className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-secondary hover:rounded-lg transition-all ${
              tabs === 2 && "bg-primary text-secondary rounded-lg"
            }`}
            onClick={() => setTabs(2)}
          >
            <i className="fa fa-motorcycle"></i>
            <button className="ml-1">Siparişler</button>
          </li>
          <li
            className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-secondary hover:rounded-lg transition-all `}
            onClick={handleSignOut}
          >
            <i className="fa fa-sign-out"></i>
            <button className="ml-1">Çıkış</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account user={user} />}
      {tabs === 1 && <Password user={user}/>}
      {tabs === 2 && <Orders />}
    </div>
  );
};

export async function getServerSideProps({req, params}) {
  const session = await getSession({req});

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const user = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`,{withCredentials: true,})


  return{
    props: {
      user: user ? user.data : null,
    },
    
  }
}

export default Profile;
