import { supabase } from "../supabase";

type props= {
    id:string;
    getProducts:()=>void;
}



const ProductDelete = ({id, getProducts}: props) => {
const handleDelete = () => {
    supabase.from("products").delete().eq("id",id).then(({error})=>{
        if(error){
            return alert(error.message);
        }
        getProducts();
    });
}

  return <button onClick={handleDelete}>Delete</button>;
}
export default ProductDelete;
