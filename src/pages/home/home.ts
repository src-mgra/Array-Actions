import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nList: [any];

  nUsers: [any];
  fUsers: [any];

  products: [any];
  fproducts: [any];
  fproducts2: [any];

  cartItemPrices: [any];
  summe: any;


  constructor(public navCtrl: NavController) {

    var compareNumerical = function(a, b) {
      return a - b;
    }

    /*
    Sortierung mit compare-Function
     */
    this.nList = [10,1,4,6,88,11];
    this.nList.sort(compareNumerical);

    /*
  Map-Function
   */
    this.nUsers = [
      {name: 'Reich', firstName: 'Frank'},
      {name: 'Huana', firstName: 'Marie'},
      {name: 'Meisenbär', firstName: 'Andreas'}
    ];

    function formattedUserNames(users) {
      return  users.map(
        user => user.firstName[0] + '. ' + user.name
      );
    }

    this.fUsers = formattedUserNames(this.nUsers);

    /*
    Filter
     */
    this.products = ["Marvel Comics Lightweight Infinity Scarf", "Ollie - The App Controlled Robot", "Meh Hoodie",
      "Magnetic Accelerator Cannon","Only one film", "Aquafarm: Aquaponics Fish Garden","Absolut perfect"];

    function  productsStartingWith (letter, products) {
      let plist = products.filter(
        product => product.startsWith(letter)
      );
      return plist;
    }


    this.fproducts = productsStartingWith('M', this.products);

    function sortbystr(sortchars,products) {
      let i: number;
      let schar: string;
      let res: [any];
      res = [
        {schar: ' ', plist: [' ',' ','']},
        {schar: ' ', plist: [' ',' ','']},
        {schar: ' ', plist: [' ',' ','']},
        {schar: ' ', plist: [' ',' ','']},
        {schar: ' ', plist: [' ',' ','']}
      ];
      for(i=0;i<sortchars.length;i++) {
        schar = sortchars[i];
        res[i].schar = schar;
        res[i].plist = productsStartingWith(schar, products);
      }

      return res;
    }

    this.fproducts2 = sortbystr('AMO',this.products);

    /*
    Reduce-Function für aggregation
     */
    this.cartItemPrices = [9.99, 19.99, 5.99,22.3];

    function  add (a, b) {
      return a + b;
    }

    this.summe = this.cartItemPrices.reduce(add);

  }

  }

