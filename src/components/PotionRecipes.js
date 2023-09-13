import React from 'react'
import './PotionRecipes.css';

const PotionRecipes = () => {
  return (
    <div className='potionsMainContainer'>
      <h1 className='potionsHeading'>Potion Recipes</h1>
      <div className='potionCards'>
      <div className='potionCard'>
        <p className='potioncardHeading'>Healing Elixir</p>
        <p className='potioncardDesc'>This potion is known for its incredible healing properties. It can mend wounds, cure ailments, and restore vitality.</p>
       
          <ul className='potioncardIngridients'>
            Ingridients:
          <li>2 sprigs of healing herbs</li>
          <li> 1 vial of pure spring water</li>
          <li>1 dragonflower petal</li>
          <li>A pinch of phoenix feather dust</li>
             <li> A dash of moonlight essence</li></ul>

        <ul className='potioncardInstructions'>Instructions
          <li>Crush the healing herbs and dragonflower petal together in a mortar and pestle until they form a fine powder.</li>
          <li>In a cauldron, mix the powdered herbs, pure spring water, and moonlight essence.</li>
          <li>Gently simmer the mixture over low heat for 15 minutes.</li>
          <li>Remove from heat and add the pinch of phoenix feather dust.</li>
             <li>Let it cool and then pour the elixir into a glass vial.</li></ul>
      </div>

      <div className='potionCard'>
        <p className='potioncardHeading'>Invisibility Brew</p>
        <p className='potioncardDesc'>This potion renders the drinker completely invisible for a limited time, making it ideal for sneaking past guards or exploring hidden places.</p>
       
          <ul className='potioncardIngridients'>
            Ingridients:
          <li>3 moonshadow mushrooms</li>
          <li>1 ghost orchid root</li>
          <li>1 moonstone</li>
          <li>2 drops of batwing venom</li>
             <li>A sprig of mistletoe</li></ul>

        <ul className='potioncardInstructions'>Instructions
          <li>Grind the moonshadow mushrooms and ghost orchid root into a fine powder.</li>
          <li>Combine the powdered ingredients with moonstone in a silver cauldron.</li>
          <li>Add the batwing venom and mistletoe.</li>
          <li>Simmer the mixture over low heat for 30 minutes.</li>
             <li>Let it cool and then pour it into a black potion bottle.</li></ul>
      
      </div>
      <div className='potionCard'>
        <p className='potioncardHeading'>Firebreather's Draught</p>
        <p className='potioncardDesc'>This potion grants the ability to breathe fire for a short period, perfect for combat or lighting a campfire.</p>
       
          <ul className='potioncardIngridients'>
            Ingridients:
          <li>1 dragon scale</li>
          <li>3 drops of phoenix blood</li>
          <li>2 dragon pepper seeds</li>
          <li>A vial of dragon breath air</li>
             <li>A pinch of volcanic ash</li></ul>

        <ul className='potioncardInstructions'>Instructions
          <li>Crush the dragon scale into a fine powder.</li>
          <li>Mix the dragon scale powder with the phoenix blood in a bronze cauldron.</li>
          <li>Add the dragon pepper seeds and dragon breath air.</li>
          <li>Heat the mixture over open flame until it begins to smoke.</li>
             <li>Stir in the pinch of volcanic ash and let it cool before transferring it to a fireproof flask.</li></ul>
      
      </div>
      </div>
    </div>
  )
}

export default PotionRecipes;