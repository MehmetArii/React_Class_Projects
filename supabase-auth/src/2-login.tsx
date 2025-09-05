import { supabase } from "./supabase";

const App = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const email = formdata.get("email");
    const password = formdata.get("password");
    const {data,error} = await supabase.auth.signInWithPassword({
      email: email as string,
      password: password as string,
    });
    console.log(data,error);
    alert("Giriş başarılı! Hoşgeldiniz.");
  };
  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h1>Giriş Yap</h1>
      <input type="email" placeholder="Email" name="email" defaultValue={"mehmetari4641@gmail.com"} />
      <input type="password" placeholder="Password" name="password" defaultValue={"passw0rd!"}/>
      <br />
      <button>Giriş Yap</button>
    </form>
  );
};

export default App;
