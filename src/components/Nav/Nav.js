import React from "react";
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return(
        <nav>
            <ul>
              <li>
                  <NavLink to="/">Home</NavLink>
              </li>
              <li>
                  <NavLink to="/pokemons">Pokemons</NavLink>
              </li>
              <li>
                  <NavLink to="/players">Players</NavLink>
              </li>
            </ul>
        </nav>
    )
}