import React from 'react';

const Navbar = (props) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img className="logo" src={props.logo} width="112" />
                </a>
            </div>
            <NavbarMenu navItems={props.navItems} />
            
        </nav>
    )
}

const NavbarMenu = (props) => {
    const navItems = props.navItems.map(item => 
        <a className="navbar-item">
            {item}
        </a>
        )

    return (
        <div className="navbar-menu">
            <div class="navbar-end">
                {navItems}
            </div>
        </div>
    )
}

export default Navbar;