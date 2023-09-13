import React,{useState} from "react";
import './MagicShopItems.css';
import Header from "./Header";
import MagicItem from "./MagicItem";
import broom from './images/broom.png'
import crystalball from './images/crystalball.png';
import wand from './images/wand.png';
import dice from './images/dice.png';
import mirror from './images/mirror.png';
import sandclock from './images/sandclock.png';
import tarot from './images/tarot.png';
import tickets from './images/tickets.png';
import magiclamp from './images/magiclamp.png';
import wizardhat from './images/wizardhat.png';

const dummyMagicItems = [
    {
        id:1,
        name:'broom',
        description: 'fly away to a magical place',
        price:17.99,
        image: <img src={broom}/>
    },
    {
        id:2,
        name:'crytals',
        description: 'look into a crytal ball',
        price:12.99,
        image: <img src={crystalball}/>
    },
    {
        id:3,
        name:'wand',
        description: 'your wand will choose you',
        price:9.99,
        image: <img src={wand}/>
    },
    {
        id:4,
        name:'dices',
        description: 'roll the magic dice',
        price:1.99,
        image: <img src={dice}/>
    },
    {
        id:5,
        name:'mirror',
        description: 'mirror will have the answers',
        price:2.99,
        image: <img src={mirror}/>
    },
    {
        id:6,
        name:'sand clock',
        description: 'before its too late',
        price:7.99,
        image: <img src={sandclock}/>
    },
    {
        id:7,
        name:'tarot',
        description: 'the cards will tell',
        price:4.99,
        image: <img src={tarot}/>
    },
    {
        id:8,
        name:'tickets',
        description: 'to a magical place, for that magical person',
        price:5.99,
        image: <img src={tickets}/>
    },
    {
        id:9,
        name:'magic lamp',
        description: 'who is your genie?',
        price:15,
        image: <img src={magiclamp}/>
    },
    {
        id:10,
        name:'wizard hat',
        description: 'be the coolest wizard',
        price:25,
        image: <img src={wizardhat}/>
    },
   ]

const MagicShopItems = (props) => {
   const magicalItemsList = dummyMagicItems.map(
    magicitem => <MagicItem 
    key={magicitem.id} 
    id={magicitem.id}
    name={magicitem.name}
    image={magicitem.image}
    description={magicitem.description} 
    price={magicitem.price}  />);
    
   return (
   
        <section>
        <ul  className="magic-grid-container">
        {magicalItemsList}
        </ul>
        </section>

    )
}
export default MagicShopItems;