import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter()
    useEffect(() => {
        const authToken = localStorage.getItem('auth-token')
        if(authToken !== '') {
            router.push('/').then(() =>
                console.log("Got to main page")
            );
        }
    })

    return(
        <div>

        </div>
    )
}