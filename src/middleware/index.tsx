import { createEffect, on } from "solid-js";
import { useIsRouting, useNavigate, useLocation, useServerContext } from "solid-start";

export default function createMiddleware(){

    const isRouting = useIsRouting();
    const navigate = useNavigate();
    const location = useLocation();

    createEffect(on(isRouting,(isRouting)=>{
        if(isRouting===false && location.pathname==="/") {
            navigate("/login/create")
        }
    }))
}