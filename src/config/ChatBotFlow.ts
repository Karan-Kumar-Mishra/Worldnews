import { Flow } from "react-chatbotify";
import { GeminiProvider } from "@rcb-plugins/llm-connector";
let apiKey = import.meta.env.VITE_APP_GEMINI_API_KEY || "";
const flow: Flow = {
    start: {
        message: "Hello! Make sure you've set your API key before getting started!",
        options: ["I am ready!"],
        chatDisabled: false,
        path: async (params: any) => {
            console.log("key-> ", apiKey)
            if (!apiKey) {
                await params.simulateStreamMessage("You have not set your API key!");
                return "start";
            }
            await params.simulateStreamMessage("Ask away!");
            return "gemini";
        },
    },
    gemini: {
        llmConnector: {
            provider: new GeminiProvider({
                mode: "direct",                     
                model: "gemini-2.5-flash",          
                apiKey: apiKey, 
                responseFormat: "stream",           
            }),
            outputType: 'character',
            onerror:(e)=>{
             console.log("error in llm response=> ",e)
            }
        },
        
    },
};
export default flow;
