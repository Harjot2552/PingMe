import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Home, LogOut, Mails, Send, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import clickSound from "./sounds/click.mp3";

const Navbar = () => {
  const { authUser, logout } = useAuthStore();

  const handleUserClick = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
  backdrop-blur-lg "
    >
      <div className="container mx-auto px-4 h-16">
        {/* /flexbox */}
        <div className="flex items-center justify-between h-full">
          {/* logo   */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">PingMe</h1>
            </Link>
          </div>
          {/* rightside */}
          <div className="flex items-center gap-2">
            {authUser && (
              <>
                <Link
                  onClick={handleUserClick}
                  to={"/"}
                  className={`btn btn-sm gap-2`}
                >
                  <Mails className="size-5" />
                  <span className="hidden sm:inline">Messages</span>
                </Link>
              </>
            )}
            <Link
              to={"/settings"}
              onClick={handleUserClick}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link
                  onClick={handleUserClick}
                  to={"/profile"}
                  className={`btn btn-sm gap-2`}
                >
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  className="flex gap-2 items-center cursor-pointer"
                  onClick={logout}
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
