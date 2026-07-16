export const spells = [
    {
        name: "Magic Missile",
        level: "1st",
        school: "Evocation",
        castingTime: "1 Action",
        range: "120 feet",
        components: ["V", "S"],
        duration: "Instantaneous",
        shortDescription: "Magic darts of glowing force",
        longDescription: `You create three glowing darts of magical force. Each dart strikes a creature of your 
        choice that you can see within range. A dart deals 1d4 + 1 Force damage to its target. The darts all strike 
        simultaneously, and you can direct them to hit one creature or several.`,
        higherLevels: "The spell creates one more dart for each spell slot level above 1.",
        imgSrc: "images/magic-missile-2.avif",
        imgAlt: "The magic missile spell being cast"
    },
    {
        name: "Fireball",
        level: "3rd",
        school: "Evocation",
        castingTime: "1 Action",
        range: "150 feet",
        components: ["V", "S", "M (a tiny ball of bat guano and sulfur)"],
        duration: "Instantaneous",
        shortDescription: "A big ball of fire",
        longDescription: `A bright streak flashes from you to a point you choose within range and then blossoms with 
				a low roar into a fiery explosion. Each creature in a 20-foot-radius Sphere centered on that point makes a 
				Dexterity saving throw, taking 8d6 Fire damage on a failed save or half as much damage on a successful one. The
				fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.`,
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
        imgSrc: "images/fireball-1.avif",
        imgAlt: "The fireball spell being cast"
    },
    {
        name: "Moonbeam",
        level: "2nd",
        school: "Evocation",
        castingTime: "1 Action",
        range: "120 feet",
        components: ["V", "S", "M (several seeds of any moonseed plant and a piece of opalescent feldspar)"],
        duration: "Concentration, up to 1 minute",
        shortDescription: "A searing beam of light from above",
        longDescription: `A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high Cylinder centered on a 
				point within range. Until the spell ends, Dim Light fills the Cylinder, and you can take a Magic action on later 
				turns to move the Cylinder up to 60 feet. When the Cylinder appears, each creature in it makes a Constitution saving 
				throw. On a failed save, a creature takes 2d10 Radiant damage, and if the creature is shape-shifted (as a result of 
				the Polymorph spell, for example), it reverts to its true form and can't shape-shift until it leaves the Cylinder. 
				On a successful save, a creature takes half as much damage only. A creature also makes this save when the spell's 
				area moves into its space and when it enters the spell's area or ends its turn there. A creature makes this save 
				only once per turn.`,
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damamge increases by 1d10 for each slot level above 2nd.",
        imgSrc: "images/moonbeam-1.jpg",
        imgAlt: "The moonbeam spell being cast"
    },
    {
        name: "Cure Wounds",
        level: "1st",
        school: "Evocation",
        castingTime: "1 Action",
        range: "Touch",
        components: ["V", "S"],
        duration: "Instantaneous",
        shortDescription: "A magic burst of healing",
        longDescription: `A creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting 
				ability modifier.`,
        higherLevels: `When you cast this spell using a spell slot of 2nd level or higher, the healing increases 
				by 1d8 for each slot level above 1st.`,
        imgSrc: "images/cure-wounds-2.jpg",
        imgAlt: "The cure wounds spell being cast"
    },
    {
        name: "Mage Hand",
        level: "Cantrip",
        school: "Conjuration",
        castingTime: "1 Action",
        range: "30 feet",
        components: ["V", "S"],
        duration: "1 Minute",
        shortDescription: "A floating spectral hand you control",
        longDescription: `A spectral, floating hand appears at a point you choose within range. The hand lasts for the 
				duration. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again. When 
				you cast the spell, you can use the hand to manipulate an object, open an unlocked door or container, stow or 
				retrieve an item from an open container, or pour the contents out of a vial. As a Magic action on your later 
				turns, you can control the hand thus again. As part of that action, you can move the hand up to 30 feet. The 
				hand can't attack, activate magic items, or carry more than 10 pounds.`,
        higherLevels: "",
        imgSrc: "images/mage-hand-2.jpg",
        imgAlt: "The mage hand spell being cast"
    },
]