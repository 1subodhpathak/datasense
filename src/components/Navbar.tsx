//src/components/Navbar.tsx
import { useState } from 'react';
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-gray-100" style={{ backgroundColor: '#006D6F'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/assets/Datasense-logo.jpg" alt="DataSense" className="h-8" />
            {/* <span className="ml-2 text-2xl font-bold" style={{ color: '#00B8BB' }}>DataSense</span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[400px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/10 to-blue-500/20 p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 text-lg font-medium" style={{ color: '#00B8BB' }}>
                              Featured Course
                            </div>
                            <p className="text-sm leading-tight text-gray-600">
                              Master Data Science fundamentals with our comprehensive course
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50">
                            <div className="text-sm font-medium text-gray-900">
                              Machine Learning
                            </div>
                            <p className="text-sm leading-snug text-gray-600">
                              Learn ML algorithms and implementations
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50">
                            <div className="text-sm font-medium text-gray-900">
                              Data Analytics
                            </div>
                            <p className="text-sm leading-snug text-gray-600">
                              Master data analysis and visualization
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/10 to-blue-500/20 p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 text-lg font-medium" style={{ color: '#00B8BB' }}>
                              Blog
                            </div>
                            <p className="text-sm leading-tight text-gray-600">
                              Latest insights and tutorials from our experts
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50">
                            <div className="text-sm font-medium text-gray-900">Documentation</div>
                            <p className="text-sm leading-snug text-gray-600">
                              Start learning with our detailed guides
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors">
                      About
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <Button variant="ghost">Log in</Button>
              <Button 
                className="text-white hover:bg-[#15A3C7]"
                style={{ backgroundColor: '#00B8BB' }}
              >
                Sign up
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#00B8BB] hover:bg-gray-100"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00B8BB] hover:bg-gray-100 rounded-md">
                Courses
              </a>
              <a className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00B8BB] hover:bg-gray-100 rounded-md">
                Resources
              </a>
              <a className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00B8BB] hover:bg-gray-100 rounded-md">
                About
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <Button variant="ghost" className="w-full justify-center">
                  Log in
                </Button>
              </div>
              <div className="mt-3 px-5 pb-2">
                <Button 
                  className="w-full justify-center text-white hover:bg-[#15A3C7]"
                  style={{ backgroundColor: '#00B8BB' }}
                >
                  Sign up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;