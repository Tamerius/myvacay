import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let vacations = [
      { id: 11, name: 'Kos, Griekenland', reason: 'Mooie stranden.' },
      { id: 12, name: 'Terschelling, Nederland', reason: 'Lekker uitwaaien.' },
      { id: 13, name: 'Parijs, Frankrijk', reason: 'Eiffeltoren.' },
      { id: 14, name: 'Berlijn, Duitsland', reason: 'Geen. Duitsland heeft geen voordelen.' },
      { id: 15, name: 'Londen, Engeland', reason: 'Grappig accent.' },
      { id: 16, name: 'Tokyo, Japan', reason: 'Sushi.' }
    ];
    return {vacations};
  }
}
