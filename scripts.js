class Member {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    describe() {
        return `${this.name} is on the ${this.level}`;
    }
}
class Group {
    constructor(name) {
        this.name = name;
    }

    addMember(Member) {
        if (Member instanceof Member) {
        this.members.push(Member);
        } else {
            throw new Error('You can only add an instance of Member. Argument is not a Member: ${Member}');
        }
    }
    describe() {
            return `${this.name} has ${this.members.length} members.`;
        }
    }
class Menu {
    constructor() {
        this.groups = [];
        this.selectedGroup = null;
    }

    start() {
        let selection = this.showMainMenu();
        while (selection !=0) {
            switch (selection) {
                case '1':
                    this.createGroup();
                    break;
                case '2': 
                    this.viewGroup();
                    break;
                case '3':
                    this.deleteGroup();
                    break;
                case '4':
                    this.displayGroups();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenu();
        }

        alert ('Logged Out')
    }

    showMainMenu() {
        return prompt(`
        0) Exit App
        1) Create Group
        2) View Group
        3) Delete Group
        4) Display All Groups
        `);
    }

   showGroupMemberMenuOptions(groupInfo) {
    return(`
    0) Go Back
    1) Create member
    2) Delete member
    ------------------------
    ${groupInfo}
    `);
   }

    displayGroups() {
        let groupString = '';
        for(let i =0; i < this.groups.length; i++) {
            groupString += i + ') ' + this.groups[i].name + '\n';
        }
        alert(groupString);
    }

    createGroup() {
        let name = prompt('Enter group Name for new group');
        this.groups.push(new Group(name));
    }

    viewGroup() {
        let index = prompt ('Enter index of the group you wish to view:');
        if (index > -1 && index < this.groups.length) {
            this.selectedGroup = this.groups[index];
            let description = 'Group Index:' + this.selectedGroup.name + '\n';

            for(let i = 0; i < this.selectedGroup.name.length; i++) {
                description += i + ') ' + this.selectedGroup.name[i].name
                 + '-' + this.selectedGroup.members[i].level + '\n';
            }
            let selection = this.showGroupMenuOptions(description);
            switch(selection) {
                case '1':
                this.createMember();
                break;
                case '2':
                this.deleteMember();

            }
        }
    }
    createMember() {
        let name = prompt('Enter name for new player');                      //Was unable to get this functionality to work despite try to troubleshoot.
        let level = prompt('Enter level for new member');
        this.selectedGroup.members.push(new Member(name, level));
    }

    deleteMember() {
    let index = prompt('Enter the index of the member you want to delete:');   //Could not get this functionality to work either in my program code
    if (index > -1 && index < this.selectedGroup.members.length) {
        this.selectedGroup.splice(index, 1);
        }
    }
}


let menu = new Menu();
menu.start();