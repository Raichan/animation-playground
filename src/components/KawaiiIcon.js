import React, { Component } from 'react';
import { Backpack, Browser, Cat, Chocolate, CreditCard, File, Ghost, IceCream, Mug, Planet, SpeechBubble } from 'react-kawaii'

// Creates any React Kawaii icon.
// Tag: icon name
// Size: width of the icon
// Mood: any of sad, shocked, happy, blissful, lovestruck, excited, ko
// Color: hex color

class KawaiiIcon extends Component {
    components = {
        backpack: Backpack,
        browser: Browser,
        cat: Cat,
        chocolate: Chocolate,
        creditcard: CreditCard, 
        file: File, 
        ghost: Ghost, 
        icecream: IceCream, 
        mug: Mug, 
        planet: Planet, 
        speechbubble: SpeechBubble
    };
    render() {
       const TagName = this.components[this.props.tag || Backpack];
       const Size = this.props.size || 150;
       const Mood = this.props.mood || "sad";
       const Color = this.props.color || "white";

       return <TagName size={Size} mood={Mood} color={Color}/>
    }
}
export default KawaiiIcon;