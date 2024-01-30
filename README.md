# rand-dots
rand-dots is a random dots generator.

import addDots function into your javascript in your html page

the addDots(size, color, number, posX, posY) function has 5 parameters:
1. size - the size of the dots (add the number, no units like px or em)
2. color - the color of the dots (add the hexadecimal like "0xffffff" in string format)
3. number - number of dots
4. posX - the range where dots can spawn on the x axis, posX - 0
5. posY - the range where dots can spawn on the y axis, posY - 0 

for example:
```
    import {addDots} from 'rand-dots'
    addDots(100, 0xffffff, 100, 100)
```

sorry, if i'm not good at explaining how it works
