import { NextPage } from 'next'
import Link from 'next/link';
import Image from "next/image";
import Facebook from "@/public/facebook.svg"
import X from "@/public/x.svg"
import Instagram from "@/public/instagram.svg"

const Footer: NextPage = ({ }) => {
  return (
    <footer className="flex flex-col items-center justify-center gap-8 md:gap-12 w-full bg-gradient-to-br from-background-secondary to-background-primary text-text-primary p-4 md:p-8 pt-15 mt-20 border-t border-border-primary shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 w-full max-w-7xl">
        <div className="bg-gradient-to-br from-background-secondary to-background-primary p-4 rounded-2xl border border-border-primary hover:border-accent-primary/40 transition-all duration-300">
          <h1 className="text-2xl font-title">
            Series<span className="text-accent-primary">Tracker</span>
          </h1>
        </div>

        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <Link
            href="#"
            className="hover:text-accent-primary transition-all duration-300 ease-in-out hover:scale-105"
          >
            À propos
          </Link>
          <Link
            href="#"
            className="hover:text-accent-primary transition-all duration-300 ease-in-out hover:scale-105"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="hover:text-accent-primary transition-all duration-300 ease-in-out hover:scale-105"
          >
            Conditions d&apos;utilisation
          </Link>
          <Link
            href="#"
            className="hover:text-accent-primary transition-all duration-300 ease-in-out hover:scale-105"
          >
            Confidentialité
          </Link>
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-background-secondary to-background-primary p-3 rounded-xl border border-border-primary hover:border-accent-primary/40 transition-all duration-300 hover:scale-105"
          >
            <Image
              src={Facebook}
              alt="Facebook Logo"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-background-secondary to-background-primary p-3 rounded-xl border border-border-primary hover:border-accent-primary/40 transition-all duration-300 hover:scale-105"
          >
            <Image
              src={X}
              alt="X Logo"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </Link>
          <Link
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-background-secondary to-background-primary p-3 rounded-xl border border-border-primary hover:border-accent-primary/40 transition-all duration-300 hover:scale-105"
          >
            <Image
              src={Instagram}
              alt="Instagram Logo"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </Link>
        </div>
      </div>

      <div className="w-full max-w-md bg-gradient-to-br from-background-secondary to-background-primary p-6 rounded-2xl border border-border-primary">
        <h3 className="text-lg font-semibold mb-4">Restez informé</h3>
        <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Votre email"
            className="flex-1 px-4 py-2 rounded-lg bg-background-primary border border-border-primary focus:border-accent-primary focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-all duration-300 hover:cursor-pointer"
          >
            S&apos;inscrire
          </button>
        </form>
      </div>

      <div className="text-center bg-gradient-to-br from-background-secondary to-background-primary p-4 rounded-2xl border border-border-primary w-full md:w-auto">
        <p className="text-sm text-text-primary/80">
          &copy; {new Date().getFullYear()} Series
          <span className="text-accent-primary">Tracker</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer