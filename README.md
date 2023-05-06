# First Generation Pokedex

<h2>About</h2>

Pokemon is a popular videogame series featuring fantastical monsters with elemental powers called Pokemon (short for "Pocket Monsters") that a player can catch and train to fight other players. I came across the <a href="https://pokeapi.co/" target="_blank">PokeAPI</a>, an API that contains data for each Pokemon, including its height, weight, types and battle stats. The Pokemon franchise remained a popular franchise amongst millenials and the younger generation. Hence, I thought it'll be a fun project to create an unofficial Pokedex (short for "Pokemon Index") listing all the original 151 Pokemon that a user could use to learn more about their favourite monsters.

I built the first version of the <a href="https://github.com/wteo/firstGenPokedexOld" target="_blank">Pokedex</a> in February 2022 out of vanilla JavaScript.

![image](https://user-images.githubusercontent.com/87306585/185771075-963d7881-050b-4f71-8590-93f1107f68e6.png)
<br/>
(A screenshot of the first version of the Pokedex.) 

The first Pokedex left a lot to be desired. It only has a simple box design featuring the image sprite of a Pokemon and its basic details and it only acts as a list with no search feature or interactivity. In spite of this, it was sufficient at that point in time for me whilst learning and understand the Fetch method.

After I started learning React and felt comfortable enough with the UI Library, I decided to create a more complete and interactive version of the Pokedex with the use of states, hooks and Redux. And this is the <a href="https://master--benevolent-chebakia-d0ea73.netlify.app/" target="_blank">result</a>.


<br/>
<h2>Key Features</h2>

<h4>Overall Design</h4>

The app was intentionally designed with a simple restrospective 1990s videogames feel to it. To match with the image sprites found in the API, I pixelated the navigation arrows as well as the font of the Pokemon species name.

The Pokemon are grouped in the order of their evolutionary lines. They are also listed in the same order as the listing of the official Pokedex. 

You can navigate around by clicking on the left or right arrows or use the 2 yellow buttons that contains:
1. The Data Buttton; and
2. The Search Button.

![image](https://user-images.githubusercontent.com/87306585/185770780-8444d6a3-fc4d-48ba-8232-3bc447308dbf.png)


<br/>
<h4>Extracting the Data</h4>

When you click on the Data Button, a hidden box will appear that contains some basic data of the current Pokemon. The data I extracted from the API includes each of the Pokemon sprite image, species name, type(s), height and weight. 

![image](https://user-images.githubusercontent.com/87306585/185771315-240b3c0e-ec7e-4504-b009-90192c8977cf.png)


<br/>
<h4>The Search Box</h4>

If you are looking for a specific Pokemon, click on the Search button. A hidden search box will appear.

There are two ways you can search for your Pokemon:
1. By type(s); or
2. By name

![image](https://user-images.githubusercontent.com/87306585/185770789-8736e5e9-5793-4a92-b13b-5bb3e7ff65b4.png)

Because some Pokemon only have 1 elemental type, the search box allows you to select only 1 type. Where you want to narrow down your search for Pokemon with dual types, you must first select the first type before selecting the second. Please also note that the search box doesn't allow you to select two of the same types. If you do this (i.e Electric / Electric), this will only generate a pop-up warning message. 

The name filter will precede over the type(s) filter. Hence, even if you have selected "Electric" but then decide to enter a Pokemon name, the end results will only show you a list of Pokemon filtered by name.  

![image](https://user-images.githubusercontent.com/87306585/185771117-496aec1d-9670-4044-91be-1f00478f726c.png)

When you select a Pokemon in the search result(s), the Pokedex will automatically bring you to that specific Pokemon.

![image](https://user-images.githubusercontent.com/87306585/185771269-ff4fe0c8-940b-4f28-9a85-2abd0f66c00d.png)


<br/>
<h4>End Words</h4>

I have no intention to commercialize this project. This is a simply a fun app I built in the hopes that it'll also give some entertainment value to users who have nostalgic feel for this franchise. As an added bonus, the project has helped me to familiarize the more advanced concepts of React and Redux. 



