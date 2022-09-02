//************************************************RYAN'S ROAST BEAN********************************************************************************
//WEEK 5 MENU APP ASSIGNMENT

class Item {
    constructor(name) {
    this.name = name;
    }
}

class Order {
    constructor(name) {
        this.name = name;
        this.items = [];
    }
}

class Menu {
    constructor() {
        this.orders = [];
        this.selectedOrder = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
            case '1':
                this.theBrewMenu();
                break;
            case '2':
                this.createYourOrder();
                break;
            case '3':
                this.showYourOrder();
                break;
            case '4':
                this.deleteOrder();
                break;
            default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) Show The Brew Menu
        2) Create Your Order
        3) Show Your Order
        4) Delete Order
        `);
    }

    showOrderMenuOptions(orderInfo) {
        return prompt (`
        0) Return to Brew Menu
        1) Add Beverage
        2) Delete Beverage

        ${orderInfo}
        `);
    }
    theBrewMenu() {
        alert(`
        
                            Menu Options
        ------------------------------------------------------------------
        Drink:              Description:
        -Cappucino          Steamed Milk (mostly foam), espresso
        -Latte              Steamed Milk (small amount of foam), espresso
        -Mocha              Steamed Milk, chocolate syrup, espresso
        -Americano          Espresso, hot water
        `);
    }

    createYourOrder() {
        let name = prompt('What is the name for the order?');
        this.orders.push(new Order(name));
        this.showYourOrder();
        alert('Good choice! We will get to brewing!');
        //this.addAnItem();
        console.log('Test');
        return 6;
    }

    showYourOrder() {
        let index = prompt('What is the name for the order?');
    
        console.log('Its', index > -1 && index < this.orders.length); //

        if (index > -1 && index < this.orders.length) {

            console.log ('That', this.selectedOrder); //

            console.log('This order', this.orders[index]); //

            this.selectedOrder('This', this.selectedOrder); //

            console.log('This', this.selectedOrder); //
        
            let description = 'Order Name: ' + this.selectedOrder.name + '\n';

         for(let i = 0; i < this.selectedOrder.items.length; i++) {
                description += i + '# ' + this.selectedOrder.items[i].name + '\n';
        }
    }

            let selection = this.showOrderMenuOptions(description);
            switch (selection) {
                case '1':
                    this.addAnItem();
                    break;
                case '2':
                    this.deleteAnItem();
        }

    }
    
    deleteOrder() {                              
        let index = prompt('What is the order number you want to delete?');     
        if (index > -1 && index < this.orders.length) {       
            this.orders.splice(index, 1);
            alert('Your order has been deleted. Let us know what we can do better to serve you!');               
        }
    }

    addAnItem() {            
        let name = prompt(`What would you like to add to your order?
        ----------------------------------------------------
        Menu Items
        ----------------------------------------------------
        Drinks:                         Snacks:
        - Chocobean Latte               - Ifrit's Flaming Sandwich
        - MP Espresso                   - Titan's Scrumptious Scramble
        - Cactuar Cold Brew             - Healer Healthy Salad`);     
                                                                        
        this.selectedOrder.items.push(new Item(name));
        return 7;                                                        
    }

    deleteAnItem() {        
        let index = prompt('What is the item number you want to delete from this order?');   
        if(index > -1 && index < this.selectedOrder.items.length) {     
            this.selectedOrder.items.splice(index, 1);      
    }

let menu = new Menu();
menu.start();
    }
}
