"use client";

import Link from 'next/link'
import PrimaryButton from '../../../shared/components/PrimaryButton'
import SecondaryButton from '../../../shared/components/SecondaryButton'
import { Avatar, AvatarImage } from '../../../shared/components/shadcn/avatar'
import { Skeleton } from '../../../shared/components/shadcn/skeleton';

import { LogOutIcon, Menu, X, LayoutDashboard, Tv } from 'lucide-react';
import { useAuthStore } from '@/shared/stores/authStore';
import { useUIStore } from '@/shared/stores/uiStore';
import { useLogout } from '../hooks/useLogout';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/shared/components/shadcn/dropdown-menu';


const Header = () => {

  const { user, isAuthenticated, isLoading } = useAuthStore();
  const { isMenuOpen, toggleMenu } = useUIStore();
  const handleLogout = useLogout();

  return (
    <header className="relative z-10">
      <div className="flex items-center justify-between p-6 bg-gradient-to-br from-background-secondary to-background-primary text-primary border-b border-border-primary shadow-lg">
        <div className="flex items-center">
          <Link href={"/"}>
            <h1 className="text-2xl font-title">
              Series<span className="text-accent-primary">Tracker</span>
            </h1>
          </Link>
        </div>

        {/* Menu hamburger pour mobile */}
        <button
          className="md:hidden p-2 hover:bg-border-primary rounded-lg transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>

        {/* Navigation desktop */}
        <nav className="hidden md:flex space-x-8">
          {!user ? (
            <>
              <Link
                href="/"
                className="text-lg hover:text-accent-primary transition-all duration-300 ease-in-out hover:scale-105"
              >
                Accueil
              </Link>
              <Link
                href="/catalogue"
                className="text-lg hover:text-accent-primary transition-all duration-300 ease-in-out hover:scale-105"
              >
                Catalogue des séries
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/catalogue"
                className="text-lg hover:text-accent-primary transition-all duration-300 ease-in-out hover:scale-105"
              >
                Catalogue des séries
              </Link>
              <Link
                href="/dashboard"
                className="text-lg hover:text-accent-primary transition-all duration-300 ease-in-out hover:scale-105"
              >
                Dashboard
              </Link>
            </>
          )}
        </nav>

        {/* Boutons d'authentification desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoading ? (
            <div className="flex items-center space-x-4">
              <Skeleton className="w-10 h-10 rounded-full bg-border-primary" />
              <Skeleton className="w-20 h-5 rounded-full bg-border-primary" />
            </div>
          ) : isAuthenticated && user ? (
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="hover:cursor-pointer"
                >
                  <div className="flex items-center gap-3 bg-gradient-to-br from-background-secondary to-background-primary p-2 rounded-2xl border border-border-primary hover:border-accent-primary/40 transition-all duration-300">
                    <Avatar className="border-2 border-accent-primary/20">
                      <AvatarImage
                        src={`https://ui-avatars.com/api/?name=${encodeURI(
                          user.name
                        )}&background=6C63FF&color=fff`}
                        alt="User Avatar"
                        className="rounded-full"
                      />
                    </Avatar>
                    <span className="text-primary font-medium">
                      {user.name}
                    </span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="left"
                  className="mt-6"
                >
                  <DropdownMenuLabel>
                    <div className="flex items-center gap-3">
                      <Avatar className="border-2 border-accent-primary/20">
                        <AvatarImage
                          src={`https://ui-avatars.com/api/?name=${encodeURI(
                            user.name
                          )}&background=6C63FF&color=fff`}
                          alt="User Avatar"
                          className="rounded-full"
                        />
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-accent-primary">{user.name}</span>
                        <span className="text-secondary">{user.email}</span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => handleLogout()}
                    className="text-error"
                  >
                    <LogOutIcon />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <div className="hover:scale-105 transition-transform duration-300">
                <PrimaryButton
                  text="Login"
                  to="/auth/signin"
                />
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <SecondaryButton
                  text="Sign Up"
                  to="/auth/signup"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible"
          }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-background-primary/80 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => toggleMenu()}
        />

        {/* Menu content */}
        <nav
          className={`absolute right-0 top-0 h-full w-[280px] bg-background-secondary border-l border-border-primary transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="p-4 h-full flex flex-col">
            {/* Close button */}
            <button
              onClick={() => toggleMenu()}
              className="self-end p-2 hover:bg-background-primary/10 rounded-full transition-colors duration-200"
            >
              <X size={24} className="text-text-primary" />
            </button>

            {!isLoading && !isAuthenticated && (
              <div className="flex flex-col space-y-4 pt-4 border-t border-border-primary">
                <PrimaryButton
                  text="Login"
                  to="/auth/signin"
                  className="w-full justify-center"
                />
                <SecondaryButton
                  text="Sign Up"
                  to="/auth/signup"
                  className="w-full justify-center"
                />
              </div>
            )}

            {isAuthenticated && user && (
              <div className="flex flex-col space-y-4 pt-4 border-t border-border-primary">
                <div className="flex items-center gap-3 bg-gradient-to-br from-background-secondary to-background-primary p-3 rounded-2xl border border-border-primary hover:border-accent-primary/40 transition-all duration-300">
                  <Avatar className="border-2 border-accent-primary/20">
                    <AvatarImage
                      src={`https://ui-avatars.com/api/?name=${encodeURI(
                        user.name
                      )}&background=6C63FF&color=fff`}
                      alt="User Avatar"
                      className="rounded-full"
                    />
                  </Avatar>
                  <span className="text-primary font-medium truncate">
                    {user.name}
                  </span>
                </div>

                <nav className="flex flex-col space-y-2 pt-4 border-t border-border-primary">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 text-primary hover:bg-background-primary/10 rounded-xl transition-all duration-200"
                    onClick={() => toggleMenu()}
                  >
                    <LayoutDashboard size={20} />
                    Dashboard
                  </Link>
                  <Link
                    href="/catalogue"
                    className="flex items-center gap-3 px-4 py-3 text-primary hover:bg-background-primary/10 rounded-xl transition-all duration-200"
                    onClick={() => toggleMenu()}
                  >
                    <Tv size={20} />
                    Catalogue des séries
                  </Link>
                </nav>

                <div className="pt-4 border-t border-border-primary">
                  <SecondaryButton
                    text="Se déconnecter"
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="w-full justify-center text-error"
                  />
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header