import { Injectable } from '@angular/core';

@Injectable()
export class NameService {

  constructor() { }
  public getBrandName(id: string): string {
    return 'Audi';
  }

  public getTypeName(id: string): string {
    return 'A4';
  }

  public getItemName(id: string): string {
    return 'Wheel';
  }
}
