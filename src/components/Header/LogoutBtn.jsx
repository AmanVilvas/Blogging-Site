import React from 'react'
import { useDispatch } from 'react-redux'
import authService from "../../appwrite/auth"
import logout from "../../store/authSlice"
import { use } from 'react'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandle = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

    return (
    <div>
      <button onClick={logoutHandle}>Logout</button>
    </div>
  )
}

export default LogoutBtn
