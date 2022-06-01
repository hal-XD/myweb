import { useParams,useNavigate,useLocation } from "react-router-dom";
import { getData,deleteInvoice } from "../testdata";

export default function Test3() {
  let navigate = useNavigate();
  let location =useLocation();
  let params = useParams();
  let d = getData(parseInt(params.id,10))
  return (
    <main style={{ padding: "1rm"}}>
        <h2>Invoice: {d.amount}</h2>
        <p>
            {d.name}:{d.number}
        </p>
        <p>
            <button onClick={() => {
                deleteInvoice(d.number);
                navigate("/invoices"+location.search);
            }}>delete</button>
        </p>
    </main>
    );
}