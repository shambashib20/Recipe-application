import headerStyles from '../styles/Header.module.css';

function Header() {
    return (

        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>

        </div>
    )
}

export default Header