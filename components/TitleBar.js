import ThemeChangerButton from "./ThemeChangerButton";

export default function TitleBar(){
  return (
    <header className="border-y-2 border-gray-100 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between">
        {/* TODO: add react components for menu buttons that link to other pages */}
        <a>Placeholder</a>
        <ThemeChangerButton></ThemeChangerButton>
      </div>
    </header>
  )
}