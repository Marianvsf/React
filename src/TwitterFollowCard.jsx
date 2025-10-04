import { useState } from "react";

export function TwitterFollowCard ({ children, userName,}) {
  // const state = useState(false);
  // const isFollowing = state[0];
  // const setIsFollowing = state[1];
  const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }


return (

<article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar'
        alt="avatar" src={`https://unavatar.io/${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
)
}