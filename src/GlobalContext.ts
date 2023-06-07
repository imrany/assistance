import { createContext } from "react"
import { GlobalContent } from "./types/types"

export const GlobalContext=createContext<GlobalContent>({
    name:"",
    path:""
})