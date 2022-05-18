import React from 'react'
import { useContext, useEffect } from 'react'
import Spinner from '../Layouts/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../Context/Github/GithubContext'
function UserResults() {
  const { fetchUsers, loading, users } = useContext(GithubContext)
  useEffect(() => {
    fetchUsers()
  }, [])

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}
export default UserResults
