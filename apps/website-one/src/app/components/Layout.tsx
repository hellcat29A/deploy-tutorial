import { SharedHeader } from "@hellcat29a/shared-header"
import '@hellcat29a/shared-header/dist/index.css'
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
const navigation = [
    { name: 'Form Layout', href: 'form-layout', current: true },
    { name: 'Team', href: 'team', current: false },
  ]
const Layout  = ()=>{

    return (
        <>
        <SharedHeader navigation={navigation}/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )




}

export default Layout