import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let vacations = [
      { id: 11, name: 'Kos, Griekenland', reason: 'Mooie stranden.', disadvantage: 'Luie schoonmakers.' },
      { id: 12, name: 'Terschelling, Nederland', reason: 'Lekker uitwaaien.', disadvantage: 'Onhandig vervoer.' },
      { id: 13, name: 'Parijs, Frankrijk', reason: 'Eiffeltoren.', disadvantage: 'Inwoners.' },
      { id: 14, name: 'Berlijn, Duitsland', reason: 'Duitse worst.', disadvantage: 'De taal.' },
      { id: 15, name: 'Londen, Engeland', reason: 'Grappig accent.', disadvantage: 'Vet ontbijt.' },
      { id: 16, name: 'Tokyo, Japan', reason: 'Sushi.', disadvantage: 'Ver weg.' }
    ];
    return {vacations};
  }
}
