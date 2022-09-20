import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../assets/search.svg'

const NavBar = () => {
    return (
      <nav class="bg-slate-100 shadow-md">
        <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between items-center py-3 ">
          <Link to="/" className="font-bold">
            Redux Video App
          </Link>
          <div class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            <form>
              <input
                class="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
              />
            </form>
            <img class="inline h-4 cursor-pointer" src={Search} alt="Search" />
          </div>
        </div>
      </nav>
    );
};

export default NavBar;