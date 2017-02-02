import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let vacations = [
      { id: 11, name: 'Kos, Griekenland' },
      { id: 12, name: 'Terschelling, Nederland' },
      { id: 13, name: 'Parijs, Frankrijk' },
      { id: 14, name: 'Berlijn, Duitsland' },
      { id: 15, name: 'Londen, Engeland' },
      { id: 16, name: 'Tokyo, Japan' }
    ];
    return {vacations};
  }
}
