import { Outlet, useIsRouting, Title } from "solid-start";
import LoginAnimation from "~/components/LoginAnimations";


export default function LoginLayout() {

	const isRouting = useIsRouting();

	return (
		<div>
			<Title>Login</Title>
			<h1>Login Page</h1>
			<LoginAnimation on={isRouting}>
				<Outlet/>
			</LoginAnimation>
		</div>
	)
}