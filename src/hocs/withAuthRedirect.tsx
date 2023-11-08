import { useNavigate } from 'react-router-dom'
import { FC, useEffect } from 'react'

export const withAuthRedirect = (Component: FC) => () => {
    const navigate = useNavigate()
    const isAuth = !!localStorage.getItem('access_token')

    useEffect(() => {
      if (!isAuth) {
        navigate('/auth')
      }
    }, [isAuth])

    return <Component />
}