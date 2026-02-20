export default function ThemeToggle() {
    const toggle = () => {
        document.body.classList.toggle("home.dark")

    };

    return <button onClick={toggle}>Theme</button>

}