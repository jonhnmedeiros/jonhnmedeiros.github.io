import { createContext, useContext, useState } from "react";

import { translations, type Language } from "@/lib/translations";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

type Widen<T> = T extends string ? string : { [K in keyof T]: Widen<T[K]> };
type Translations = Widen<(typeof translations)["en"]>;

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
};

function detectLanguage(): Language {
  if (typeof navigator === "undefined") return "en";
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
  t: translations.en,
};

const LanguageProviderContext =
  createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage,
  storageKey = "vite-ui-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem(storageKey) as Language | null;
    if (stored === "en" || stored === "pt") return stored;
    return defaultLanguage ?? detectLanguage();
  });

  const value: LanguageProviderState = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem(storageKey, language);
      setLanguageState(language);
    },
    t: translations[language],
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};
