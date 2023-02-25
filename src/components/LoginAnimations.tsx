import { Motion, Presence } from "@motionone/solid";
import { Rerun } from "@solid-primitives/keyed";

interface LoginPros {
    on: Function,
    children: any
}

export default function LoginAnimation({ on,children }: LoginPros) {
    return (
        <Presence exitBeforeEnter>
            <Rerun on={on()}>
                <Motion.div
                    animate={{ 
                        opacity: [0.5, 1],
                        x: [-50,0]
                    }}
                    transition={{ duration: 0.25, easing: "ease-in-out" }}
                >
                    {children}
                </Motion.div>
            </Rerun>
		</Presence>
    )
}