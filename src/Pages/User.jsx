import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../Context/Github/GithubContext'

function User() {
  const { getUser, User } = useContext(GithubContext)
  const params = useParams()

  useEffect(() => {
    getUser(params.login)
  }, [])
  return <div>{User.login}</div>
}

export default User
