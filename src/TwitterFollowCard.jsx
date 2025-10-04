export function TwitterFollowCard ({ userName, name, isFollowing}) {
return (

<article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar'
        alt="avatar" src={`https://unavatar.io/${userName}`} />
        <div className='tw-followCard-info'>
          <strong className='tw-followCard-infoUserName'>{name}</strong>
          <span>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
)
}