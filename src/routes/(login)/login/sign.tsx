import { batch, createEffect, createMemo, createSignal, on, onMount, untrack } from "solid-js"


export default function Sign() {

	const [a, setA] = createSignal(false)
	const [b, setB] = createSignal(false)

	let refH2:any;

	createEffect(on(a,(a)=>{
		console.log("Apenas A", a, b())
	}))

	createEffect(()=>{
		console.log("Apenas B", untrack(a), b())
	})

	createEffect(()=>{
		a()
		b()
		console.log("Testando multiplos set sem render")
	})

	const newValue = createMemo(()=>{
		return a()+'Value'
	})

	return (
		<>
			<h2 ref={refH2}>Sign</h2>
			<p>{newValue().toString()}</p>

			<button onClick={()=>{
				//dispara apenas uma vez o render
				batch(()=>{
					setB(!b())
					setA(!a())
				})
			}}>CHANGE</button>

			<button onClick={()=>setA(!a())}>A</button>
			<button onClick={()=>setB(!b())}>B</button>
		</>
	)
}
