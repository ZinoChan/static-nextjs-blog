

const Navbar = () => {
    return (
        <header className="relative z-40 w-full py-4 max-w-screen-xl mx-auto px-2">
            <nav className="flex items-center justify-between">
                <h1 className="text-xl font-main">Blog</h1>
                <ul className="flex items-center space-x-4">
                    <li><a className="text-md capitalize font-bold font-secondary" href="#hero">Home</a></li>
                    <li><a className="text-md capitalize font-bold font-secondary" href="#posts">Posts</a></li>
                    <li><a className="text-md capitalize font-bold font-secondary" href="#footer">NewsLetter</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
