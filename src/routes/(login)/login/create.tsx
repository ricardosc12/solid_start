import { createSignal, splitProps, mergeProps, createEffect, on } from "solid-js"
import { untrack } from "solid-js/web"

interface ComponentProps {
	name: any
}

//Em Solid não podemos simplesmente desestruturar props

// const Component=(props:ComponentProps)     COM Reatividade
// const Component=({ name }:ComponentProps)  SEM Reatividade
// Isso o faz perder a reatividade

// Mas podemos passar o get do createSignal


const Component=({ name }: ComponentProps)=>{

	// props = mergeProps({name: "Sem nome"}, props);

	let refDiv: HTMLDivElement = null!;

	createEffect(on(name,(name)=>{
		console.log(refDiv.getElementsByTagName('h3')[0].innerHTML)
		console.log(name)
	}))

	return (
		<div ref={refDiv}>
			<h3>Name</h3>
			<p>{name()}</p>
			<p>{Date.now()}</p>
		</div>
	)
}

export default function Create() {

	const [name, setName] = createSignal('init')


	return (
		<>
			<h2>Create</h2>
			<Component name={name}/>
			<button onClick={()=>setName(`M: ${Date.now()}`)}>set_nome</button>
		</>
	)
}
