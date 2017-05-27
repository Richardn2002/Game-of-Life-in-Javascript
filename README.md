# Game-of-Life-in-Javascript
John Conway,a mathematician,designed Game of Life in 1970.Its purpose is to find out how life origins.
The game consists of a 2d grid.For each block in the grid,it has 2 status,i.e.,alive or dead,which is represented as black or white.The status of one cell in the next round is determined by the 8 surrounding cells.

1.If exactly 3 cells alive is surrounding 1 cell,it will be alive in the next round,even if it is dead in the present round(Just like an organism at birth)
2.If there's less than 2 cells alive surrounding,the cell will die(from isolation).
3.If there are more than 3 cells alive surrounding 1 cell,it will die the next round(from crowd and lack of resource).
4.If there are exactly 2 cells alive surrounding,the cell will remain its status.    

So now we get 4 simple rules for the cells to cling to.We set a starting pattern and let go.Amazingly,the cells started to act like real organisms.The ones who are too simple will be consumed quickly.The ones who are stable will stay in one place forever.Eventually,a big,complex swarm of cells will appear and start to expand quickly,killing others.It's just like evolution.Only the fittest survives.   

The game gives us an insight:If 4 simple rules can let life appear from the chaos and ashes,maybe some simple rules of physics can create microbes and eventually,humans in the way the game does.

--------------------
For saving the results,I embed hongru's canvas2image code(https://github.com/hongru/canvas2image) .This means:
1.You must be connected to the Internet to experience the full functions of my code.
2.I must mention his/her name.


license:MIT



----------------
DO NOT USE THOSE CODES IN THE RELEASE SECTION.THEY ARE CODES AT THE VERY BEGINNING(I.E. VERY WRONG)AND GITHUB DOESN'T ALLOW ME TO DELETE THEM.
