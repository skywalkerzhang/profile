import { createContext, createEffect, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const ThemeContext = createContext();

export function ThemeContextProvider(props) {
    const localTheme = localStorage.getItem("theme");
    const [theme, setTheme] = createStore(
        localTheme ? JSON.parse(localTheme) : {
            isDark: true,
            name: 'frappe'
        }
    );
    createEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
        // document.getElementsByTagName("body")[0].setAttribute("class", theme.name);
    });
    function toggleTheme() {
        if (theme.isDark) {
            setTheme({
                isDark: false,
                name: 'latte'
            });
        } else {
            setTheme({
                isDark: true,
                name: 'frappe'
            });
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    return useContext(ThemeContext);
}

