import { Title, useServerContext  } from "solid-start";
import { createServerAction$ } from "solid-start/server";

export default function Server(){

    const [enrolling, { Form }] = createServerAction$(async (form: FormData, { request }) => {
        // Executa no servidor
        console.log(form)
    
    });

    return (
        <div style={{margin:'5rem'}}>
            <Title>Server</Title>
            <div>Server</div>
            <Form>
                <input type="hidden" name="subject" value="Defense against the Dark Arts" />
                <button type="submit" disabled={enrolling.pending}>
                    Enroll
                </button>
            </Form>
        </div>
    )
}