import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import Search from '../../assets/search.svg';
import { searched } from '../../features/filter/filterSlice';

const NavBar = () => {

  const dispatch = useDispatch();

  const match = useMatch("/");

  const navigate = useNavigate();

  const {search} = useSelector((state)=>state.filter);

  const [input, setInput] = useState(search);

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(searched(input));
      
      if(!match){
        navigate('/')
      }
  }

  

    return (
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between items-center py-3 ">
          <Link to="/" className="font-bold">
            Redux Video App
          </Link>
          <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            <form onSubmit={handleSubmit}>
              <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
            <img
              className="inline h-4 cursor-pointer"
              src={Search}
              alt="Search"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </nav>
    );
};

export default NavBar;