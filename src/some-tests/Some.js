import React from 'react';
import Recipe from '../components/ingredients/Recipe'
import './Some.css'

const Some = ({ recipes }) =>
    <article>
        <header>
            <h1>Some Recipes</h1>
        </header>
        <div className="recipes">
            { recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />)
            }
        </div>
    </article>

Some.displayName = 'Some'

export default Some