return (
    <div className='main_header_container'>
        <div className='logo'>
            <div className='logo_img'><img src={logo} alt="logo" /></div>
            <text >Gabriel <br /> Rodrigues</text>
        </div>

        <div className='header_content'>
            <div className='navlinks'>
                <Link to="/Guessgame">PROJETO 1</Link>
                <Link to="/FutebolAPI">PROJETO 2</Link>
                <Link to="/RandomStore">PROJETO 3</Link>
                <Link to="/">PERFIL</Link>
                <label className="switch">
                    <input type="checkbox" id='checkboxcolor' onClick={() => { colormode('checkboxcolor') }} />
                    <span className="slider"></span>
                </label>
            </div>
            <button className='menu_icon' onClick={togglesidebar}><HiMenu /></button>
        </div>
        <Sidebar />
    </div>
)

function Sidebar() {
    return (
        <div className='sidebar' id='sidebar'>
            <section className='sidebar_icons'>
                <button onClick={togglesidebar} className='close_sidebar_button'><AiOutlineMenuUnfold /></button>
                <label className="switch">
                    <input type="checkbox" id='checkboxcolor2' onClick={() => { colormode('checkboxcolor2') }} />
                    <span className="slider"></span>
                </label>
            </section>
            <section className='sidebar_links'>
                <Link id='project1' to="/Guessgame">PROJETO 1</Link>
                <Link id='project2' to="/FutebolAPI">PROJETO 2</Link>
                <Link id='project3' to="/RandomStore">PROJETO 3</Link>
                <Link className='selected' id='profile' to="/">PERFIL</Link>
            </section>
        </div>
        

    )
}

}