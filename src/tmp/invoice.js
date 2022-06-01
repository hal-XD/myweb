import { NavLink,Link,Outlet,useSearchParams,useLocation } from 'react-router-dom';

import { testData } from "../testdata"

export default function Testpage2() {
  let td = testData()
  let [searchParams,setSearchParams] = useSearchParams();
  return (
    <main style={{ padding: "1rem 0"}}>
      <h2> this is testpage2.</h2>
      <nav
        style={{
          borderRight:"solid 1px",
          padding: "1rem",
        }}
      >
        <input
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
                let filter = event.target.value;
                if (filter) {
                    setSearchParams({filter});
                } else {
                    setSearchParams({});
                }
            }}
        >
        </input>
        {td
        .filter((d) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = d.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
        })
        .map((data) =>(
          <QueryNavLink 
            style={ ({isActive}) => {
                return { 
                    display: "block",
                    margin: "1rem 0",
                    color: isActive?"red":"green",
                };
            }}
            to={`/invoices/${data.number}`}
            key={data.number}
          >
            {data.name}
          </QueryNavLink>
        ))}
      </nav>
      <Outlet />
    </main>
  )
}

function QueryNavLink({to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />
}