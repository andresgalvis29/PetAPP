import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CitasPage } from './citas.page';

describe('CitasPage', () => {
	let component: CitasPage;
	let fixture: ComponentFixture<CitasPage>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [ CitasPage ],
				imports: [ IonicModule.forRoot(), ExploreContainerComponentModule ]
			}).compileComponents();

			fixture = TestBed.createComponent(CitasPage);
			component = fixture.componentInstance;
			fixture.detectChanges();
		})
	);

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
