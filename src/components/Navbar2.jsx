'use client';
import { useState, useCallback } from 'react';
import { Menu, X, ChevronDown, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';
import ProfileDropdown from './ProfileDropdown';
import useAuthStore from '@/utility/justAuth';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [browseOpen, setBrowseOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const { isLoggedIn, logout, hasHydrated } = useAuthStore();

  // Memoized logout handler with error handling
  const handleLogout = useCallback(async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      localStorage.clear();
      await fetch('/api/logout', { method: 'POST' });
      window.location.href = '/auth';
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Failed to logout. Please try again.');
    } finally {
      setIsLoggingOut(false);
    }
  }, [logout]);

  // Expanded browse options
  const browseOptions = [
    'Book', 'Book Chapters', 'Conference Proceeding', 'Dissertation',
    'Magazine', 'Manuscript', 'Newspaper', 'Question Papers', 
    'Research Papers', 'Thesis'
  ];

  // Memoized handler for toggling mobile menu
  const toggleMobileMenu = useCallback(() => {
    setOpen((prev) => !prev);
    if (browseOpen) setBrowseOpen(false);
  }, [browseOpen]);

  // Early return if store hasn't hydrated
  if (!hasHydrated) {
    return null;
  }

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Left Side - Logo & Title */}
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <img src="/logo.png" alt="Logo" className="h-12" loading="lazy" />
          <div className="leading-tight">
            <h1 className="text-lg font-bold">Digital Library</h1>
            <p className="text-xs text-gray-200">Dispur College</p>
          </div>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-semibold text-sm">
          <Link href="/" className="hover:underline" aria-label="Home">HOME</Link>

          {/* Browse Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBrowseOpen(true)}
            onMouseLeave={() => setBrowseOpen(false)}
          >
            <button
              onClick={() => setBrowseOpen(!browseOpen)}
              className="hover:underline flex items-center gap-1"
              aria-expanded={browseOpen}
              aria-controls="browse-dropdown"
              aria-label="Browse content types"
            >
              BROWSE
              <ChevronDown size={16} className={`transition-transform ${browseOpen ? 'rotate-180' : ''}`} />
            </button>

            {browseOpen && (
              <div className="absolute top-full left-0 pt-2 w-56 z-50" id="browse-dropdown">
                <div className="bg-white border border-gray-200 rounded-md shadow-lg">
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {browseOptions.map((option) => (
                      <Link
                        key={option}
                        href={`/type/${encodeURIComponent(option.toLowerCase().replace(/\s+/g, '-'))}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                        onClick={() => setBrowseOpen(false)}
                      >
                        {option}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/subjects" className="hover:underline" aria-label="Subjects">SUBJECTS</Link>
        </nav>

        {/* Right Side - Login / Profile */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            {isLoggedIn ? (
              <ProfileDropdown onLogout={handleLogout} isLoggingOut={isLoggingOut} />
            ) : (
              <Link
                href="/auth"
                className="flex items-center gap-1 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:opacity-90 transition"
                aria-label="Login"
              >
                <User size={16} className="inline-block mr-1" />
                LOGIN
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-[#003366] flex flex-col items-start px-6 py-4 space-y-2 md:hidden z-50">
          <Link
            href="/"
            className="text-sm hover:underline"
            onClick={toggleMobileMenu}
            aria-label="Home"
          >
            HOME
          </Link>

          {/* Mobile Browse */}
          <div className="w-full">
            <button
              onClick={() => setBrowseOpen(!browseOpen)}
              className="text-sm hover:underline flex items-center gap-2 w-full justify-between"
              aria-expanded={browseOpen}
              aria-controls="mobile-browse-dropdown"
              aria-label="Browse content types"
            >
              BROWSE
              <ChevronDown size={16} className={`transition-transform ${browseOpen ? 'rotate-180' : ''}`} />
            </button>
            {browseOpen && (
              <div className="mt-2 ml-4 space-y-1 max-h-48 overflow-y-auto" id="mobile-browse-dropdown">
                {browseOptions.map((option) => (
                  <Link
                    key={option}
                    href={`/type/${encodeURIComponent(option.toLowerCase().replace(/\s+/g, '-'))}`}
                    className="block text-xs text-gray-300 hover:text-white py-1"
                    onClick={toggleMobileMenu}
                  >
                    {option}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/subjects"
            className="text-sm hover:underline"
            onClick={toggleMobileMenu}
            aria-label="Subjects"
          >
            SUBJECTS
          </Link>

          <div className="pt-4 border-t border-gray-200">
            {isLoggedIn ? (
              <div className="space-y-2">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-500"
                  onClick={toggleMobileMenu}
                  aria-label="Dashboard"
                >
                  DASHBOARD <ArrowRight size={16} />
                </Link>
                <button
                  onClick={() => {
                    toggleMobileMenu();
                    handleLogout();
                  }}
                  className="flex items-center gap-2 text-sm text-red-400 hover:text-red-500"
                  disabled={isLoggingOut}
                  aria-label="Logout"
                >
                  {isLoggingOut ? 'Logging out...' : 'LOGOUT'} <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                className="flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-500"
                onClick={toggleMobileMenu}
                aria-label="Login"
              >
                LOGIN <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}