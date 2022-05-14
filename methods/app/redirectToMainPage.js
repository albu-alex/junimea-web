export function redirectToMainPage(router) {
    // Router must be an instance of a useRouter method call
    const authToken = localStorage.getItem('auth-token')
    if (authToken !== '') {
        router.push('/').then(() =>
            console.log("Got to main page")
        );
        return false
    }
    return true
}