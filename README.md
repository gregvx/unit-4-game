# unit-4-game

[Visit site here](https://gregvx.github.io/unit-4-game/)

This is a simple game written in javascript where the goal is to collect crystals of differing values into a virtual wallet such that the total value of the wallet equals some given goal.
The values of each crystal are not known, and have to be determined by the player by trying crystals once and observing the increase in value of the wallet.
If the player goes over the goal value, the game restarts with a new goal and new values for the crystals.

This project is a part of a teaching assignment to develop experience with jquery.

The javascript could stand to be improved by only giving the player a goal number that is actually doable. For example, the for crystal values are random numbers generated between 1 and 12. The goal value is a random number between 19 and 120. If the game gave the user 
crystal values of 2,4,6,& 8, and a target value of 21, the user could not possible win such a game.
Furthermore, to really make the game winnable every time, the target number should be greater than or equal to the sum of each of the crystal values, so the player can try each crystal once, without fear of losing the game.
So, one idea for making this game better, would be to set the target value egal to a function in the form of
Target = aw + bx + cy + dz where a, b, c, & d are the four crystal values, and w, x, y, & z are all random integers greater than zero
such that Target is greater than 19 and less than 120.
