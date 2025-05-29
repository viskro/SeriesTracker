"use client";

import Link from 'next/link'
import PrimaryButton from '../Buttons/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton'
import { Avatar, AvatarImage } from '../shadcn/avatar'
import { signOut } from '@/lib/auth-client';
import { Skeleton } from '../shadcn/skeleton';
import { redirect } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useAuthStore } from '@/lib/stores/authStore';
import { useUIStore } from '@/lib/stores/uiStore';
import { NOTIFICATION_DURATION, NOTIFICATION_TYPES, NOTIFICATION_MESSAGES } from '@/lib/constants/notifications';
import { v4 as uuidv4 } from 'uuid';

const Header = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuthStore();
  const { isMenuOpen, toggleMenu, addNotification } = useUIStore();

  const handleSignOut = async () => {
    try {
      await signOut();
      logout();
      addNotification({
        id: uuidv4(),
        type: NOTIFICATION_TYPES.SUCCESS,
        message: NOTIFICATION_MESSAGES.AUTH.LOGOUT_SUCCESS,
        duration: NOTIFICATION_DURATION
      });
      redirect("/");
    } catch (error) {
      addNotification({
        id: uuidv4(),
        type: NOTIFICATION_TYPES.ERROR,
        message: `${NOTIFICATION_MESSAGES.AUTH.ERROR} : ${error}`,
        duration: NOTIFICATION_DURATION
      });
    }
  };

  return (
    <header className="relative z-10">
      <div className="flex items-center justify-between p-6 bg-gradient-to-br from-background-secondary to-background-primary text-text-primary border-b border-border-primary shadow-lg">
        <div className="flex items-center">
          <h1 className="text-2xl font-title">
            Series<span className="text-accent-primary">Tracker</span>
          </h1>
        </div>

        {/* Menu hamburger pour mobile */}
        <button
          className="md:hidden p-2 hover:bg-border-primary rounded-lg transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-text-primary" />
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
              <Skeleton className='w-10 h-10 rounded-full bg-border-primary' />
              <Skeleton className='w-20 h-5 rounded-full bg-border-primary' />
            </div>
          ) : isAuthenticated && user ? (
            <div className="flex items-center gap-4">
              <div className="hover:scale-105 transition-transform duration-300">
                <SecondaryButton
                  text="SignOut"
                  onClick={handleSignOut}
                />
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-br from-background-secondary to-background-primary p-2 rounded-2xl border border-border-primary hover:border-accent-primary/40 transition-all duration-300">
                <Avatar className="border-2 border-accent-primary/20">
                  <AvatarImage
                    src={`https://ui-avatars.com/api/?name=${encodeURI(user.name)}&background=6C63FF&color=fff`}
                    alt="User Avatar"
                    className="rounded-full"
                  />
                </Avatar>
                <span className="text-text-primary font-medium">{user.name}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <div className="hover:scale-105 transition-transform duration-300">
                <PrimaryButton text="Login" to="/auth/signin" />
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <SecondaryButton text="Sign Up" to="/auth/signup" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="bg-background-secondary border-b border-border-primary p-4">
          {!isLoading && !isAuthenticated && (
            <div className="flex flex-col space-y-4 pt-4 border-t border-border-primary">
              <PrimaryButton text="Login" to="/auth/signin" />
              <SecondaryButton text="Sign Up" to="/auth/signup" />
            </div>
          )}

          {isAuthenticated && user && (
            <div className="flex flex-col space-y-4 pt-4 border-t border-border-primary">
              <div className="flex items-center gap-3 bg-gradient-to-br from-background-secondary to-background-primary p-2 rounded-2xl border border-border-primary">
                <Avatar className="border-2 border-accent-primary/20">
                  <AvatarImage
                    src={`https://ui-avatars.com/api/?name=${encodeURI(user.name)}&background=6C63FF&color=fff`}
                    alt="User Avatar"
                    className="rounded-full"
                  />
                </Avatar>
                <span className="text-text-primary font-medium">{user.name}</span>
              </div>
              <SecondaryButton
                text="SignOut"
                onClick={handleSignOut}
              />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header