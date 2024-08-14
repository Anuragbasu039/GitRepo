import React from "react";
import {Link} from 'react-router-dom';
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { IoMdGitNetwork } from "react-icons/io";
import ThemeBtn from './ThemeBtn'

export default function Navbar(){
    const repositoryUrl="https://github.com/Anuragbasu";
    return(
        <>
          <header 
          className="flex h-16 w-full items-center justify-between border-b border-border px-1 lg:px-20
          bg-white shadow dark:bg-gray-800 dark:text-white
          ">
            <Link
            to="/"
            className="text-lg font-black flex flex-row items-center justify-center gap-2 cursor-pointer"
            >
            <GitHubLogoIcon width="22" height="22" />
            Git-Account
            </Link>
            
            <div className="flex items-center gap-4">
            <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-primary cursor-pointer flex items-center gap-1"
           >
           <IoMdGitNetwork size={22} />
           GitHub
          </a>
          {/* <ModeToggle /> */}
          <ThemeBtn/>

          <Link to="/">
            <button className="mt-1 bg-lime-400 text-white px-4 py-2 rounded-md hover:bg-lime-400 duration-300">
              Back
            </button>
          </Link>

      </div>

          </header>
        
        </>
    )
}
