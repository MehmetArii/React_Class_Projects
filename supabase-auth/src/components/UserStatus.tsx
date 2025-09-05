import { useEffect } from "react";
import { supabase } from "../supabase";

type props = {
    setSessionUserId: (sessionId: string | null) => void;
    sessionUserId: string | null;
}

const UserStatus = ({setSessionUserId, sessionUserId}: props ) => {



    useEffect(() => {
        supabase.auth.getSession().then(({data}) => {
            setSessionUserId(data.session?.user.id ?? null);
        });
        const {data: sub} = supabase.auth.onAuthStateChange((_e, s) => {
            setSessionUserId(s?.user.id ?? null);
        });
        return () => sub.subscription.unsubscribe();
    }, []);
    

  return (
    <div>User Id: {sessionUserId}</div>
  )
}

export default UserStatus