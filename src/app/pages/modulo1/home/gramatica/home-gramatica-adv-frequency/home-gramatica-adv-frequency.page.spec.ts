import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeGramaticaAdvFrequencyPage } from './home-gramatica-adv-frequency.page';

describe('HomeGramaticaAdvFrequencyPage', () => {
  let component: HomeGramaticaAdvFrequencyPage;
  let fixture: ComponentFixture<HomeGramaticaAdvFrequencyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGramaticaAdvFrequencyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeGramaticaAdvFrequencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
