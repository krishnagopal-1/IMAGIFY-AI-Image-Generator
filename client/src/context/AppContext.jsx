import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [showLogin, setShowLogin] = useState(false)
    const [credit, setCredit] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const navigate = useNavigate()

    const loadCreditsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/credits', { headers: { token } })
            if (data.success) {
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const generateImage = async (prompt) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/image/generate-image',
                { prompt, userId: user._id },
                { headers: { token } }
            );

            await loadCreditsData();
            if (data.creditBalance === 0) {
                navigate('/buy');
            }

            if (data.success) {
                return data.resultImage;
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        setToken('')
        setUser(null)
    }

    useEffect(() => {
        if (token) {
            loadCreditsData()
        }
    }, [token])

    const value = { user, setUser, showLogin, setShowLogin, token, setToken, credit, setCredit, backendUrl, loadCreditsData, logout, generateImage }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;