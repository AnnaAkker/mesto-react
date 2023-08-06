import { useEffect, useState } from "react"
import api from "../../utils/api"

export default function ButtonLikes({ likes, myid, cardid }) {

  const [islikes, setIsLikes] = useState(false)
  const [isCount, setIsCount] = useState(likes.length)

  useEffect(() => {
    setIsLikes(likes.some(element => myid === element._id))
  }, [likes, myid])

  function handleLikes() {
    if (islikes) {
      api.deleteLike(cardid)
        .then(res => {
          setIsLikes(false)
          setIsCount(res.likes.length)
        })
        .catch((err) => console.error(`Ошибка удаления лайка ${err}`))
    } else {
      api.addLike(cardid)
        .then(res => {
          setIsLikes(true)
          setIsCount(res.likes.length)
        })
        .catch((err) => console.error(`Ошибка установки лайка ${err}`))
    }
  }

  return (
    <>
      <button type="button" className={`elements__like-button ${islikes ? 'elements__like-button_active' : ''}`} onClick={handleLikes} />
      <span className="elements__counter">{isCount}</span>
    </>
  )

}