import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PacientesPage } from './pacientes.page';

describe('PacientesPage', () => {
	let component: PacientesPage;
	let fixture: ComponentFixture<PacientesPage>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [ PacientesPage ],
				imports: [ IonicModule.forRoot(), ExploreContainerComponentModule ]
			}).compileComponents();

			fixture = TestBed.createComponent(PacientesPage);
			component = fixture.componentInstance;
			fixture.detectChanges();
		})
	);

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
