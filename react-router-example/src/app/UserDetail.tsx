import React, {useState,useEffect} from "react";
import { useParams, useNavigate } from "react-router";
import { User } from "./Home";
import { supabase } from "./supabase";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    supabase.from("USERS").select().eq("id", id).single().then((res) => setUser(res.data as User));
  }, [])
  
  return <div>
    <ul>
      <li>ID: {user?.id}</li>
      <li>Name: {user?.name}</li>
    </ul>
  </div>;
};

export default UserDetail;
