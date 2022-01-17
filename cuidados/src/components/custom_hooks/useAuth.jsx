export default function useAuth() {
    return sessionStorage.getItem('token');
};
