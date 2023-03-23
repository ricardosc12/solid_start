import { createMemo, createSignal, For } from 'solid-js'
import style from './style.module.css'

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

export default function AbreviadorPage(){

    const [name, setName] = createSignal('')

    const [number, setNumer] = createSignal(0)


    const abrev_name = createMemo(()=>{
        return name()
            .split('\n')
            .map(item=>item
                .split(' ')
                .map((letter,index)=>index>number()?`${letter[0]||''}${letter[0]?'.':''}`:letter)
                .join(' '))
    })

    function copy() {
        copyToClipboard(abrev_name().join('\n'))
    }

    return (
        <div className={style.abrev_root}>
            <div>
                Nome: 
                <textarea rows={10} cols={50} onInput={(e)=>setName(e.target.value)} type="text" />
            </div>
            <div>
                Qtd: 
                <input onInput={(e)=>setNumer(parseInt(e.target.value)||0)} type="text" />
            </div>
            <div>
                <For each={abrev_name()}>
                    {(name)=><p>{name}</p>}
                </For>
            </div>
            <button onClick={copy}>copy</button>
        </div>
    )
}