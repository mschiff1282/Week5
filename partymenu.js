/* Menu App for choosing which Harvestella Characters to add to the questing party*/
class Character {
    
    constructor(name, job) {
      this.name = name;
      this.job = job;
    }
    describe() {
       return `${this.name} is a ${this.job}.`; 
    }
  }
 /* this was done to test the class:
  const char1 = new Character ('Aria', 'Assault Savon')
  console.log(char1);*/
  
  class questingParty {
    constructor(name) {
      this.name = name;
      this.character = [];
    }
    addCharacter(character) {
      if (character instanceof Character) {
        this.character.push(character); 
      } else {
        throw new Error(`Argument is not one of the game characters: ${character}.`);
      }
    }
    describe() {
      return `Your questing party ${this.name}, have ${this.character.length} members in the group.`;
    }
  }
  class Menu {
    constructor() {
      this.questParty = []; 
      this.selectedQuestParty = null; 
    }
      start() {
      let selection = this.showMainMenuOptions(); 
      while (selection != 0) {
        switch (selection) {
          case "1":
            this.createQuestParty();
            break;
          case "2":
            this.viewQuestParty();
            break;
          case "3":
            this.deleteQuestParty();
            break;
          default:
            alert('This party does not work!');
        }
        selection = this.showMainMenuOptions(); 
      }
        alert('Goodbye!'); 
    }
    showMainMenuOptions() {
      return prompt(`
              0) Exit
              1) Make new questing party
              2) View current questing party
              3) Delete current questing party
          `);
    }
      showPartyMenuOptions(questingPartyInfo) {
      return prompt(`
          0) Go back
          1) Add game character
          2) Delete game character
          -------------------------
          ${questingPartyInfo} 
          `); 
    }
      createQuestParty() {
      let name = prompt('Please name this new Questing Party.'); 
      this.questParty.push(new questingParty(name)); 
    }
      viewQuestParty() {
      let index = prompt('What index does this current party belong to?'); 
      if (index > -1 && index < this.questParty.length) {
        this.currentParty = this.questParty[index]; 
        let description = 'This current questing party is called ' + this.currentParty.name + '\n'; 
          for (let i = 0; i < this.currentParty.character.length; i++) {
          description += i + ') ' + this.currentParty.character[i].name + ' - ' + this.currentParty.character[i].job + '\n'; 
        } 
        let selection = this.showPartyMenuOptions(description); 
        switch (selection) {
          case "1":
            this.addPartyMember();
            break;
          case "2":
            this.deletePartyMember();
        }
      }
    }
    deleteQuestParty() {
      let index = prompt('What is the index of the party member you want to delete?'); 
      if (index > -1 && index < this.questingParty.length) {
        this.party.splice(index, 1); 
      }
    }
    addPartyMember() {
      let name = prompt('Which game character do you want to add?'); 
      let job = prompt('Which job does this character have?'); 
      this.currentParty.character.push(new Character(name, job)); 
    }
  
    deletePartyMember() {
      let index = prompt('Which character are we removing from the roster?'); 
      if (index > -1 && index < this.selectedParty.characters.length) {
        this.currentParty.character.splice(index, 1); 
      }
    }
  }
  
  let menu = new Menu();
  menu.start(); 

