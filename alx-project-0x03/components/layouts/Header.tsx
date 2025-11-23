import Link from "next/link"

import Button from "../common/Button"

const Header: React.FC = () =>{
    return (
        <header className="fixed w-full bg-white shadow-md">
            <nav>
        {/* The Link component handles client-side routing */}
        <Link href="/home" style={{ marginRight: '15px' }}>
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
      </nav>
            <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
                <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">Splash App</Link>
                {/* Button group */}
                <div className="flex gap-4">
                    <Button  buttonLabel="Sign In" buttonBackgroundColor="blue"/>
                    <Button buttonLabel="Sign Up" buttonBackgroundColor="blue"/>
                    
                </div>
            </div>
        </header>

    );
};

export default Header;