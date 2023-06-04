// shuffle
let deck = [
    // clubs
    ['ace', 'clubs'], ['two', 'clubs'], ['three', 'clubs'], ['four', 'clubs'], ['five', 'clubs'], ['six', 'clubs'], ['seven', 'clubs'], ['eight', 'clubs'], ['nine', 'clubs'], ['ten', 'clubs'], ['jack', 'clubs'], ['queen', 'clubs'], ['king', 'clubs'],
    // spades
    ['ace', 'spades'], ['two', 'spades'], ['three', 'spades'], ['four', 'spades'], ['five', 'spades'], ['six', 'spades'], ['seven', 'spades'], ['eight', 'spades'], ['nine', 'spades'], ['ten', 'spades'], ['jack', 'spades'], ['queen', 'spades'], ['king', 'spades'],
    // diamonds
    ['ace', 'diamonds'], ['two', 'diamonds'], ['three', 'diamonds'], ['four', 'diamonds'], ['five', 'diamonds'], ['six', 'diamonds'], ['seven', 'diamonds'], ['eight', 'diamonds'], ['nine', 'diamonds'], ['ten', 'diamonds'], ['jack', 'diamonds'], ['queen', 'diamonds'], ['king', 'diamonds'],
    // hearts
    ['ace', 'hearts'], ['two', 'hearts'], ['three', 'hearts'], ['four', 'hearts'], ['five', 'hearts'], ['six', 'hearts'], ['seven', 'hearts'], ['eight', 'hearts'], ['nine', 'hearts'], ['ten', 'hearts'], ['jack', 'hearts'], ['queen', 'hearts'], ['king', 'hearts']
]

// shuffle
let currentIndex = deck.length,  randomIndex;
while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [deck[currentIndex], deck[randomIndex]] = [
    deck[randomIndex], deck[currentIndex]];
}

// set back of cards
const cardClass = document.querySelectorAll('.card')
// set tableau
let row2 = []
for (i=0; i<8; i++) {
    row2.push(deck[0])
    deck.splice(0, 1)
    console.log(row2)
}
let row3 = []
for (i=0; i<7; i++) {
    row3.push(deck[0])
    deck.splice(0, 1)
    console.log(row3)
}
let row4 = []
for (i=0; i<6; i++) {
    row4.push(deck[0])
    deck.splice(0, 1)
    console.log(row4)
}
let row5 = []
for (i=0; i<5; i++) {
    row5.push(deck[0])
    deck.splice(0, 1)
    console.log(row5)
}
let row6 = []
for (i=0; i<4; i++) {
    row6.push(deck[0])
    deck.splice(0, 1)
    console.log(row6)
}
let row7 = []
for (i=0; i<3; i++) {
    row7.push(deck[0])
    deck.splice(0, 1)
    console.log(row7)
}
let row8 = []
for (i=0; i<2; i++) {
    row8.push(deck[0])
    deck.splice(0, 1)
    console.log(row8)
}