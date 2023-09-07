import {NavigationService} from "../services/navigation.service";

export class VisibilityComponent {
    constructor(private navigationService: NavigationService) { }

    isVisible: boolean = false;

    activateAnimation() {
        this.isVisible = true;
    }

    activateNavigation(name: string) {
        this.navigationService.setActiveTab(name);
    }
}

