import { Outlet, useIsRouting } from "solid-start";
import LoginAnimation from "~/components/LoginAnimations";

export default function LoginLayout() {

	const isRouting = useIsRouting();

	return (
		<div>
			<h1>Login Page</h1>
			<LoginAnimation on={isRouting}>
				
				<Outlet/>
			</LoginAnimation>
		</div>
	)
}