(()=>{"use strict";const e=class{hits=0;sunk=!1;coords=[];constructor(e,a){this.length=e,this.name=a}hit(){this.hits+=1}isSunk(){this.hits===this.length&&(this.sunk=!0)}setCords(e,a){const t=[a,e];this.coords.push(t)}},a=class{board=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]];carrier=new e(5,"Carrier");battleship=new e(4,"Battleship");destroyer=new e(3,"Destroyer");submarine=new e(3,"Submarine");patrolBoat=new e(2,"Patrol Boat");ships=[this.carrier,this.battleship,this.destroyer,this.submarine,this.patrolBoat];checkLegalPlacement(e,a,t,o){return!0===a&&o+e.length<=10||!1===a&&t+e.length<=10}checkSpotsTaken(e,a,t,o){let r=!1;if(a)for(let a=0;a<e.length;a+=1)""!==this.board[o+a][t]&&(r=!0);else if(!a)for(let a=0;a<e.length;a+=1)""!==this.board[o][t+a]&&(r=!0);return r}placeShip(e,a,t,o){if(!1===this.checkLegalPlacement(e,a,t,o))return"that is not a legal placement";if(!0===this.checkSpotsTaken(e,a,t,o))return"that is not a legal placement";for(let r=0;r<e.length;r+=1)!0===a?(this.board[o+r][t]="X",e.setCords(t,o+r)):!1===a&&(this.board[o][t+r]="X",e.setCords(t+r,o))}getShipAtCoords(e,a){const t=[a,e];let o,r=!1;if(this.ships.forEach((e=>{e.coords.forEach((a=>{JSON.stringify(a)===JSON.stringify(t)&&(o=e,r=!0)}))})),!0===r)return o}sinkShip(e){!0===e.sunk&&e.coords.forEach((e=>{this.board[e[0]][e[1]]="S"}))}recieveAttack(e,a){let t;""===this.board[a][e]?this.board[a][e]="M":"X"===this.board[a][e]&&(t=this.getShipAtCoords(e,a),this.board[a][e]="H",t.hit()),this.ships.forEach((e=>{e.isSunk()})),void 0!==t&&this.sinkShip(t)}checkAllShipsAreSunk(){let e=!0;return this.ships.forEach((a=>{!1===a.sunk&&(e=!1)})),e}},t=class{gameboard=new a;playerBoard=this.gameboard.board;constructor(e){this.name=e}attackEnemy(e,a,t){e.gameboard.recieveAttack(a,t)}computerMove(e){let a=Math.floor(10*Math.random()),t=Math.floor(10*Math.random()),o=!1;for(;!1===o;)""===e.gameboard.board[t][a]||"X"===e.gameboard.board[t][a]?(e.gameboard.recieveAttack(a,t),o=!0):(a=Math.floor(10*Math.random()),t=Math.floor(10*Math.random()))}computerPlaceShips(){this.gameboard.ships.forEach((e=>{if(0===Math.floor(2*Math.random())){const a=Math.floor(Math.random()*(10-e.length)),t=Math.floor(10*Math.random());this.gameboard.placeShip(e,!1,a,t),console.log(this.gameboard.placeShip(e,!1,a,t))}else{const a=Math.floor(10*Math.random()),t=Math.floor(Math.random()*(10-e.length));console.log(e),console.log([a,t]),this.gameboard.placeShip(e,!0,a,t)}}))}};function o(e,a,t){for(let o=0;o<e.gameboard.board[t].length;o+=1){const r=document.createElement("div");if(r.classList.add("spot"),"X"===e.gameboard.board[t][o])r.innerText="X";else if("M"===e.gameboard.board[t][o]){const e=document.createElement("img");e.src="../assets/icons/waves.svg",e.classList.add("icon"),r.append(e)}else if("S"===e.gameboard.board[t][o]){const e=document.createElement("img");e.src="../assets/icons/skull.svg",e.classList.add("icon"),r.append(e)}else if("H"===e.gameboard.board[t][o]){const e=document.createElement("img");e.src="../assets/icons/explosion.svg",e.classList.add("icon"),r.append(e)}else r.innerText=e.gameboard.board[t][o];r.dataset.yCord=t,r.dataset.xCord=o,a.append(r)}}function r(e,a){!0===e.gameboard.checkAllShipsAreSunk()?console.log(`${e.name} has lost`):!0===a.gameboard.checkAllShipsAreSunk()&&console.log(`${a.name} has lost`)}function s(e){const a=document.createElement("div"),t=document.createElement("h2");return t.textContent="Your Board",a.id="player-board",a.classList.add("board"),function(e,a){for(let t=0;t<e.gameboard.board.length;t+=1){const r=document.createElement("div");r.classList.add("row"),o(e,r,t),a.append(r)}}(e,a),a.prepend(t),a}function n(e,a){const t=document.createElement("div"),o=document.createElement("h2");o.textContent=`${e.name}'s Board`,t.id="enemy-board",t.classList.add("board"),t.prepend(o);for(let o=0;o<e.gameboard.board.length;o+=1){const s=document.createElement("div");s.classList.add("row");for(let t=0;t<e.gameboard.board[o].length;t+=1){const n=document.createElement("div");if(n.classList.add("spot"),n.classList.add("enemy-spot"),"X"===e.gameboard.board[o][t])n.innerText="";else if("M"===e.gameboard.board[o][t]){const e=document.createElement("img");e.src="../assets/icons/waves.svg",e.classList.add("icon"),n.append(e)}else if("S"===e.gameboard.board[o][t]){const e=document.createElement("img");e.src="../assets/icons/skull.svg",e.classList.add("icon"),n.append(e)}else if("H"===e.gameboard.board[o][t]){const e=document.createElement("img");e.src="../assets/icons/explosion.svg",e.classList.add("icon"),n.append(e)}else n.innerText=e.gameboard.board[o][t];n.dataset.yCord=o,n.dataset.xCord=t,n.addEventListener("click",(()=>{d(e,a,n),r(e,a)})),s.append(n)}t.append(s)}return t}function d(e,a,t){const o=document.getElementById("enemy-board-container"),r=document.getElementById("player-board-container"),d=parseInt(t.dataset.yCord,10),c=parseInt(t.dataset.xCord,10);e.gameboard.recieveAttack(c,d),e.computerMove(a),o.innerHTML="",r.innerHTML="",o.append(n(e,a)),r.append(s(a))}const c={drawPlayerBoard:s,drawEnemyBoard:n,handleEnemyBoardClicks:function(e,a){const t=document.getElementById("enemy-board-container");document.querySelectorAll(".enemy-spot").forEach((o=>{o.addEventListener("click",(()=>{const r=parseInt(o.dataset.yCord,10),s=parseInt(o.dataset.xCord,10);e.attackEnemy(a,s,r),t.innerHTML="",t.append(n(a))}))}))}},i=new t("Boston"),l=new t("Computer");i.gameboard.placeShip(i.gameboard.carrier,!1,0,0),i.gameboard.placeShip(i.gameboard.battleship,!0,4,2),i.gameboard.placeShip(i.gameboard.patrolBoat,!1,3,7),i.gameboard.placeShip(i.gameboard.destroyer,!0,7,4),i.gameboard.placeShip(i.gameboard.submarine,!1,7,0),l.computerPlaceShips(),console.log(l.gameboard.board);const m=document.createElement("div");m.id="enemy-board-container",m.append(c.drawEnemyBoard(l,i));const h=document.createElement("div");h.id="player-board-container",h.append(c.drawPlayerBoard(i)),document.body.prepend(h),document.body.prepend(m)})();