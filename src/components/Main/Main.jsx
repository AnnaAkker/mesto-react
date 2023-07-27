export default function Main({onAvatar}) {
    return(
        <main>
            <section className="profile">
                <div className="profile__description">
                    <button className="button-image-overlay profile__image-overlay"
                    type="button" onClick={onAvatar}>
                    <img
                        className="profile__image"
                        src="#"
                        alt="Фотография в профиле"
                    />
                    </button>
                    <div className="profile__block">
                        <h1 className="profile__name" />
                        <button type="button" className="profile__button-edit" />
                        <p className="profile__subtitle" />
                    </div>
                </div>
                <button type="button" className="profile__button-add" />
            </section>
            <section className="elements"></section>
        </main>
    )
};