import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts'
import { AdminPanel } from './AdminPanel.tsx'
import { withAuthRedirect } from '../../hocs/withAuthRedirect.tsx'
import { useEffect } from 'react'
import { getUsers } from '../../redux/userThunks.ts'

export const AdminPanelDataLayers = withAuthRedirect(() => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const auth = useAppSelector(state => state.appReducer.auth)
  const users = useAppSelector(state => state.appReducer.users)

  return (
    <AdminPanel users={users} isAdmin={auth.isAdmin}/>
  )
})