import { Route, Routes, A } from "@solidjs/router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { useThemeContext } from "./context/ThemeContext";
import Fa from 'solid-fa'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function App() {
    const { theme, toggleTheme } = useThemeContext();
    return (
        <div id="app" class={`${theme.name} transition`}>
            <div class="py-10 container m-auto">
                <header class="p-2 text-xl flex items-center gap-4">
                    <span onClick={toggleTheme} class="hover:cursor-pointer w-4">
                        <Fa icon={theme.isDark ? faMoon : faSun} />
                    </span>
                    <h1>Yue's Site</h1>
                    <A href="/profile" class="hover:text-subtext0">home</A>
                    <A href="/profile/blogs" class="hover:text-subtext0">blogs</A>
                </header>
                <Routes>
                    <Route path="/profile" component={Home} />
                    <Route path="/profile/blogs" component={Blog} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
