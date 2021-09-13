import React from 'react';
import './App.css';

//import components
import Product from "./Components/Product";
import Button from "./Components/Button";
import Tile from "./Components/Tile";

//product images
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';

//tile images
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button text="to the collection"/>
                <Button text="shop all bags"/>
                <Button disabled={true} text="pre-orders"/>
            </nav>
            <main>
                <Product
                    label="Best seller"
                    img={bag_1}
                    alt="bag_1.png"
                    name="The handy bag"
                    price="€400,-"
                />
                <Product
                    label="Best seller"
                    img={bag_2}
                    alt="bag_2.png"
                    name="The stylish bag"
                    price="€250,-"
                />
                <Product
                    label="New collection"
                    img={bag_3}
                    alt="bag_3.png"
                    name="The simple bag"
                    price="€300,-"
                />
                <Product
                    label="New collection"
                    img={bag_4}
                    alt="bag_4.png"
                    name="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                <Tile title="The Brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deserunt dicta, eius
                        exercitationem fugiat itaque iure laudantium molestias nam perspiciatis porro sunt suscipit
                        tempora voluptate!
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deserunt dicta, eius
                        exercitationem fugiat itaque iure laudantium molestias nam perspiciatis porro sunt suscipit
                        tempora voluptate!
                    </p>
                </Tile>
                <Tile
                    img={brand}
                    alt="brand"
                />
                <Tile
                    img={our_story}
                    alt="brand"
                />
                <Tile title="Our story">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus at beatae consequatur cum
                        dicta excepturi facilis fuga fugiat impedit maiores maxime necessitatibus nostrum optio
                        perferendis porro praesentium quam quia, quos reiciendis repudiandae saepe similique sunt vel
                        velit veniam voluptatem? Ea earum facilis nemo nisi non quia quis quo tempore.
                    </p>
                </Tile>
            </footer>
        </>
    );
}

export default App;







