(()=>{"use strict";const e=class{hits=0;sunk=!1;coords=[];constructor(e,a){this.length=e,this.name=a}hit(){this.hits=this.hits+1}isSunk(){this.hits===this.length&&(this.sunk=!0)}setCords(e,a){let t=[a,e];this.coords.push(t)}},a=class{board=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]];carrier=new e(5,"Carrier");battleship=new e(4,"Battleship");destroyer=new e(3,"Destroyer");submarine=new e(3,"Submarine");patrolBoat=new e(2,"Patrol Boat");ships=[this.carrier,this.battleship,this.destroyer,this.submarine,this.patrolBoat];constructor(){}checkLegalPlacement(e,a,t,r){return!0===a&&r+e.length<=10||!1===a&&t+e.length<=10}placeShip(e,a,t,r){if(!1===this.checkLegalPlacement(e,a,t,r))return"that is not a legal placement";for(let o=0;o<e.length;o++)!0===a?(this.board[r+o][t]="X",e.setCords(t,r+o)):!1===a&&(this.board[r][t+o]="X",e.setCords(t+o,r))}getShipAtCoords(e,a){const t=[a,e];let r,o=!1;if(this.ships.forEach((e=>{e.coords.forEach((a=>{JSON.stringify(a)===JSON.stringify(t)&&(r=e,o=!0)}))})),!0===o)return r}recieveAttack(e,a){if(""===this.board[a][e])this.board[a][e]="M";else if("X"===this.board[a][e]){const t=this.getShipAtCoords(e,a);this.board[a][e]="H",t.hit()}this.ships.forEach((e=>{e.isSunk()}))}checkAllShipsAreSunk(){let e=!0;return this.ships.forEach((a=>{!1===a.sunk&&(e=!1)})),e}},t=class{gameboard=new a;playerBoard=this.gameboard.board;constructor(e){this.name=e}attackEnemy(e,a,t){e.gameboard.recieveAttack(a,t),console.log(e.gameboard.board)}};function r(e){const a=document.createElement("div");a.id="enemy-board",a.classList.add("board");for(let t=0;t<e.gameboard.board.length;t++){const o=document.createElement("div");o.classList.add("row");for(let a=0;a<e.gameboard.board[t].length;a++){const d=document.createElement("div");d.classList.add("spot"),d.classList.add("enemy-spot"),"X"===e.gameboard.board[t][a]?d.innerText="":d.innerText=e.gameboard.board[t][a],d.dataset.yCord=t,d.dataset.xCord=a,d.addEventListener("click",(()=>{const a=document.getElementById("enemy-board-container"),t=parseInt(d.dataset.yCord),o=parseInt(d.dataset.xCord);e.gameboard.recieveAttack(o,t),a.innerHTML="",a.append(r(e))})),o.append(d)}a.append(o)}return a}const o={drawPlayerBoard:function(e){const a=document.createElement("div");a.id="player-board",a.classList.add("board");for(let t=0;t<e.gameboard.board.length;t++){const r=document.createElement("div");r.classList.add("row");for(let a=0;a<e.gameboard.board[t].length;a++){const o=document.createElement("div");o.classList.add("spot"),o.innerText=e.gameboard.board[t][a],o.dataset.yCord=t,o.dataset.xCord=a,r.append(o)}a.append(r)}return a},drawEnemyBoard:r,handleEnemyBoardClicks:function(e,a){const t=document.getElementById("enemy-board-container");document.querySelectorAll(".enemy-spot").forEach((o=>{o.addEventListener("click",(()=>{const d=parseInt(o.dataset.yCord),s=parseInt(o.dataset.xCord);e.attackEnemy(a,s,d),t.innerHTML="",t.append(r(a))}))}))}},d=new t("Boston"),s=new t("Computer");d.gameboard.placeShip(d.gameboard.carrier,!1,0,0),d.gameboard.placeShip(d.gameboard.battleship,!0,4,2),d.gameboard.placeShip(d.gameboard.patrolBoat,!1,3,7),d.gameboard.placeShip(d.gameboard.destroyer,!0,7,4),d.gameboard.placeShip(d.gameboard.submarine,!1,7,0),s.gameboard.placeShip(s.gameboard.carrier,!1,0,0),s.gameboard.placeShip(s.gameboard.battleship,!0,4,2),s.gameboard.placeShip(s.gameboard.patrolBoat,!1,3,7),s.gameboard.placeShip(s.gameboard.destroyer,!0,7,4),s.gameboard.placeShip(s.gameboard.submarine,!1,7,0),d.attackEnemy(s,0,0);const n=document.createElement("div");n.id="enemy-board-container",n.append(o.drawEnemyBoard(s,d)),document.body.prepend(o.drawPlayerBoard(d)),document.body.prepend(n),document.querySelectorAll(".enemy-spot").forEach((e=>{e.addEventListener("click",(()=>{const a=parseInt(e.dataset.yCord),t=parseInt(e.dataset.xCord);d.attackEnemy(s,t,a),n.innerHTML="",n.append(o.drawEnemyBoard(s))}))}))})();