// shuffle
let cards = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
    let currentIndex = cards.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex], cards[currentIndex]];
    }
// sort through all bottom cards
for (i=0; i<7; i++) {
    // all bottom cards on the tableau
    switch (i) {
        case 0:
            spot = 'r2c1'
            break
        case 1:
            spot = 'r3c2'
            break
        case 2:
            spot = 'r4c3'
            break
        case 3:
            spot = 'r5c4'
            break
        case 4:
            spot = 'r6c5'
            break
        case 5:
            spot = 'r7c6'
            break
        case 6:
            spot = 'r8c7'
            break
    }
    // put on tableau
    switch (cards[i]) {
        case "ace":
            document.getElementById(spot).style.backgroundImage = 'url(Diamonds/Ace.png)'
            cards.splice(cards.indexOf('ace'), 1)
            break
        case "two":
            document.getElementById(spot).style.backgroundImage = 'url(Diamonds/Two.png)'
            cards.splice(cards.indexOf('two'), 1)
            break
        case "three":
            document.getElementById(spot).style.backgroundImage = 'url(Diamonds/Three.png)'
            cards.splice(cards.indexOf('three'), 1)
            break
        case "four":
            document.getElementById(spot).style.backgroundImage = 'url(Diamonds/Four.png)'
            cards.splice(cards.indexOf('four'), 1)
            break
        case "five":
            document.getElementById(spot).style.backgroundImage = 'url(Diamonds/Five.png)'
            cards.splice(cards.indexOf('five'), 1)
            break
        case "six":
            document.getElementById(spot).style.backgroundImage = 'url(Diamonds/Six.png)'
            cards.splice(cards.indexOf('six'), 1)
            break
        case "seven":
            document.getElementById(spot).style.backgroundImage = 'url(Diamonds/Seven.png)'
            cards.splice(cards.indexOf('seven'), 1)
            break
        case "eight":
            document.getElementById(spot).style.backgroundImage = 'url(Diamonds/Eight.png)'
            cards.splice(cards.indexOf('eight'), 1)
            break
        case "nine":
            document.getElementById(spot).style.backgroundImage = 'url(Diamonds/Nine.png)'
            cards.splice(cards.indexOf('nine'), 1)
            break
        case "ten":
            document.getElementById(spot).style.backgroundImage = 'url(Diamonds/Ten.png)'
            cards.splice(cards.indexOf('ten'), 1)
            break
        case "jack":
            document.getElementById(spot).style.backgroundImage = 'url(Diamonds/Jack.png)'
            cards.splice(cards.indexOf('jack'), 1)
            break
        case "queen":
            document.getElementById(spot).style.backgroundImage = 'url(Diamonds/Queen.png)'
            cards.splice(cards.indexOf('queen'), 1)
            break
        case "king":
            document.getElementById(spot).style.backgroundImage = 'url(Diamonds/King.png)'
            cards.splice(cards.indexOf('king'), 1)
            break
    }
    //make cards "fit" to shape
    document.getElementById(spot).style.backgroundSize = '100%'
    document.getElementById(spot).style.height = '102%'
    document.getElementById(spot).style.backgroundRepeat = 'no-repeat'
}