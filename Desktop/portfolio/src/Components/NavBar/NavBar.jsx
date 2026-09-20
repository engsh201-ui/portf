// import { useState, useContext } from "react"
// import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi"
// import { ThemeContext } from "../../App"

// const Navbar = ({ activeSection }) => {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const { theme, toggleTheme } = useContext(ThemeContext)
  

//   const navLinks = [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Education", href: "#education" },
//     { label: "Projects", href: "#projects" },
//     { label: "Contact", href: "#contact" }
//   ]

//   return (
//     <nav className="fixed top-0 w-full z-[9999] bg-white dark:bg-bgdark shadow-md overflow-x-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 relative">
//           {/* Logo */}
//           <div className="text-2xl font-semibold text-myprimary dark:text-blue-400 shrink-0">
//             SHAHD
//           </div>
//           {/* Menu (Desktop) */}
//           <ul className="hidden md:flex items-center justify-center w-full gap-8">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className={`px-2 text-lg font-medium transition ${
//                     activeSection === link.href.replace("#", "")
//                       ? "text-blue-500"
//                       : "text-black dark:text-white"
//                   }`}>
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           {/* Theme Toggle */}
//           <div className="hidden md:block shrink-0">
//             <button
//               onClick={toggleTheme}
//               className="text-xl text-gray-700 dark:text-gray-200">
//               {theme === "dark" ? <FiSun size={33} /> : <FiMoon size={33} />}
//             </button>
//           </div>
//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="w-10 h-10 flex items-center justify-center text-2xl text-gray-700 dark:text-gray-200 hover:text-myprimary z-[9999]">
//               {menuOpen ? <FiX /> : <FiMenu />}
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//     <div className={`md:hidden fixed inset-0 top-16 z-[9998] transition-all duration-300 ease-in-out ${
//     menuOpen ? "opacity-100 pointer-events-auto translate-y-0"
//         : "opacity-0 pointer-events-none -translate-y-4" }`}>
//          {/* Backdrop */}
//         <div className="absolute inset-0 bg-white/90 dark:bg-gray-950/ backdrop-blur-xl"
//           onClick={() => setMenuOpen(false)}/>
//          {/* Menu Content */}
//         <div className="relative flex flex-col h-full px-6 pt-8 pb-12">
//             <ul className="flex flex-col gap-1">
//                 {navLinks.map((link, index) => (
//                 <li key={index}>
//                 <a
//                   href={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className={`group flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800 transition-all duration-200 ${
//                     activeSection === link.href.replace("#", "")
//                     ? "text-blue-500"
//                     : "text-gray-800 dark:text-gray-100"}`}>
//                     <span className="text-lg font-semibold tracking-tight group-hover:translate-x-2 transition-transform duration-200">
//                     {link.label}
//                   </span>
//                 </a>
//             </li>
//           ))}
//         </ul>
//         <div className="mt-auto flex items-center justify-between pt-2">
//             <span className="text-mysecondary dark:text-white">Toggle Theme</span>
//             <label className="relative inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               checked={theme === "dark"}
//               onChange={toggleTheme}
//               className="sr-only peer"/>
//               <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-600 rounded-full peer peer-checked:bg-blue-500 transition-all duration-300"></div>
//                   <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
//             </label>
//         </div>
//       </div>
//     </div>
//   </nav>
//   )
// }
// export default Navbar
import { useState, useContext } from "react"
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi"
import { ThemeContext } from "../../App"

const Navbar = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]

  return (
    <nav className="fixed top-0 w-full z-[9999] bg-white dark:bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 shrink-0">
            SHAHD
          </div>

          {/* Menu (Desktop) */}
          <ul className="hidden md:flex items-center justify-center w-full gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`px-2 text-lg font-semibold transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-800 dark:text-slate-100 hover:text-blue-500"
                  }`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle (Desktop) */}
          <div className="hidden md:block shrink-0">
            <button
              onClick={toggleTheme}
              className="text-xl text-slate-700 dark:text-slate-200 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              {theme === "dark" ? <FiSun size={28} /> : <FiMoon size={28} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex items-center justify-center text-2xl text-slate-800 dark:text-slate-100 z-[9999]">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-900 shadow-2xl transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[500px] opacity-100 visible py-4 px-6 border-b border-slate-200 dark:border-slate-800"
            : "max-h-0 opacity-0 invisible py-0 px-6"
        } overflow-hidden`}>
        <ul className="flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 px-4 rounded-xl text-lg font-bold transition-all duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-slate-800"
                    : "text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                }`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Section */}
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between px-2">
          <span className="text-slate-900 dark:text-white font-semibold text-base">
            Toggle Theme
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
          
          {/* </label> */}
          <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-slate-300 peer-focus:outline-none dark:bg-slate-700 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
          </label>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
