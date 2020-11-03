import RegisterPage from "../pages/Register"
import LoginPage from "../pages/Login"
import ContactsPage from "../pages/Contacts"
import CreateContactPage from "../pages/Contacts/CreateContact"

const routes=[
    {path:'/auth/register',
    component:RegisterPage,
    title:"Register"},
    {path:'/auth/login',
    component:LoginPage,
    title:"Login"},
   
    {path:'/',
    component:ContactsPage,
    title:"Contacts"},

    {path:'/contacts/create',
    component:CreateContactPage,
    title:"Create Contact"}, 
]

export default routes;