import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html'
})
export class HeaderComponent {
	// After selecting one Tab, pass to App Comp
	/* @Output() featureSelected = new EventEmitter<string>();

	onSelect(feature: string) {
			this.featureSelected.emit(feature);
	} */
	authService: AuthService;
	constructor(private dataStorageSer: DataStorageService,
		private authSrv: AuthService) { 
			this.authService = authSrv;
		}

	onSaveData() {
		this.dataStorageSer.storeRecipes()
			.subscribe(
				(response: Response) => {
					console.log(response);
				}
			);
	}

	onFetchData() {
		this.dataStorageSer.getRecipes();
	}

	onLogout() {
		this.authService.logout();
	}
}