import { useTheme } from './ThemeContext';

const Header = () => {
    const { toggleTheme } = useTheme();

    return (
        <header>
            <h1>My Themed App</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    );
};

export default Header;