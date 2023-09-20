import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MedicamentosPage } from './medicamentos.page';

describe('Tab3Page', () => {
	let component: MedicamentosPage;
	let fixture: ComponentFixture<MedicamentosPage>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [ MedicamentosPage ],
				imports: [ IonicModule.forRoot(), ExploreContainerComponentModule ]
			}).compileComponents();

			fixture = TestBed.createComponent(MedicamentosPage);
			component = fixture.componentInstance;
			fixture.detectChanges();
		})
	);

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
