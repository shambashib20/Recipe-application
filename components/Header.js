import headerStyles from '../styles/Header.module.css';

function Header() {
    return (

        <div>
            <h1 className='title'>
                <span>WebDev</span> News
            </h1>
            <style jsx>
                {`
                   .title {
                      color: red;
                   }

                `}

            </style>
        </div>
    )
}

export default Header