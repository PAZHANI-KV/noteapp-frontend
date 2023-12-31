import { Children } from "react"
import { useSelector } from "react-redux"
import LoginPage from "../pages/LoginPage"

export default function PrivateRoute({ children }) {

    const { auth } = useSelector((state) => state.userReducer)


    if (auth) {
        return Children
    }


    return <LoginPage></LoginPage>
}