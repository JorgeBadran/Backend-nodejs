export const rollDices = () => {
    const dice1 = Math.floor(6 * Math.random()) + 1;
    const dice2 = Math.floor(6 * Math.random()) + 1;
    const veredict = dice1 + dice2 == 7 ? "win" : "lose";

    return {
        dice1,
        dice2,
        rollScroll: dice1 + dice2,
        veredict
    };
};