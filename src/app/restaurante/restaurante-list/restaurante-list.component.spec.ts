/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { RestauranteListComponent } from './restaurante-list.component';
import { RestauranteService } from '../restaurante.service';
import { RestauranteDetail } from '../restaurante-detail';
import { Restaurante } from '../restaurante';
import { RouterTestingModule } from '@angular/router/testing';

describe('RestauranteListComponent', () => {
  let component: RestauranteListComponent;
  let fixture: ComponentFixture<RestauranteListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ RestauranteListComponent ],
      providers: [ RestauranteService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 10; i++) {
      const restaurante = new RestauranteDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
      );
      component.restaurantes.push(restaurante);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });
});
