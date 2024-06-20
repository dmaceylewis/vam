import { useEffect, useState } from "react"
import { ArtistViews } from "./ArtistViews"
import { UserViews } from "./UserViews"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localVAMUser = localStorage.getItem("vam_user")
    const vamUserObject = JSON.parse(localVAMUser)

    setCurrentUser(vamUserObject)
  }, [])

  return currentUser.isArtist ? <ArtistViews currentUser={currentUser} /> : <UserViews currentUser={currentUser}/>
}