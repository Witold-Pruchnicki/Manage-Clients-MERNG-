import Logo from './assets/logo-intro.png'
export default function Header(){
    return(
        <nav className="navbar bg-light mb-4 p-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <div className="d-flex">
                        <img src={Logo} alt="logo"/>
                        <div>MERNG Project</div>
                    </div>
                </a>
            </div>
        </nav>
    )
}