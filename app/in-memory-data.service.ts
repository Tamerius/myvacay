import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let vacations = [
      { id: 11, name: 'Kos, Greece' },
      { id: 12, name: 'Terschelling, The Netherlands' },
      { id: 13, name: 'Paris, France' },
      { id: 14, name: 'Berlin, Germany' },
      { id: 15, name: 'London, England' },
      { id: 16, name: 'Tokyo, Japan' }
    ];
    return {vacations};
  }
}
