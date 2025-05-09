import { create } from 'zustand'

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('chatTheme') || 'business';
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
}

export const useThemeStore = create((set, get) => ({
    theme: getThemeFromLocalStorage(),
    setTheme: () => {
        const theme = get().theme === 'business' ? 'nord' : 'business';
        localStorage.setItem('chatTheme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        set({ theme: theme });
    }
}))
