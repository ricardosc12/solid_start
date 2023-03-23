import {
  StartServer,
  createHandler,
  renderAsync,
  renderStream,
  renderSync
} from "solid-start/entry-server";

export default createHandler(
  ({forward})=>{
    return async event => {

      console.log("TESTE")
      return forward(event);
    }
    
  },
  renderAsync(event => <StartServer event={event} />)
);