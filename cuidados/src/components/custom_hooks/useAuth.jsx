function useAuth() {

    return sessionStorage.getItem('token') ? true : false;

}

export default useAuth;