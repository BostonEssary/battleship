(()=>{"use strict";const t=class{hits=0;sunk=!1;constructor(t,s){this.length=t,this.name=s}hit(){this.hits=this.hits+1}isSunk(){this.hits===this.length&&(this.sunk=!0)}};let s=new class{board=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]];carrier=new t(5,"Carrier");battleship=new t(4,"Battleship");destroyer=new t(3,"Destroyer");submarine=new t(3,"Submarine");patrolBoat=new t(2,"Patrol Boat");ships=[this.carrier,this.battleship,this.destroyer,this.submarine,this.patrolBoat];shipCords={Carrier:[],Battleship:[],Destroyer:[],Submarine:[],"Patrol Boat":[]};constructor(){}checkLegalPlacement(t,s,e,r){return!0===s&&r+t.length<=9||!1===s&&e+t.length<=9}setShipCords(t,s,e){this.shipCords[t.name].push([s,e])}getShipCords(t){return this.shipCords[t.name]}placeShip(t,s,e,r){if(!1===this.checkLegalPlacement(t,s,e,r))return"that is not a legal placement";for(let i=0;i<t.length;i++)!0===s?(this.board[r+i][e]="X",this.setShipCords(t,r+i,e)):!1===s&&(this.board[r][e+i]="X",this.setShipCords(t,r,e+i));return this.board}recieveAttack(t,s){""===this.board[s][t]?this.board[s][t]="M":"X"===this.board[s][t]&&(this.board[s][t]="H")}};console.log(s.board),console.log(s.placeShip(s.patrolBoat,!1,0,0)),console.log(s.recieveAttack(0,0)),console.log(s.shipCords),console.log(s.getKeyByValue),console.log(s.getKeyByValue(s.shipCords,[0,0]))})();