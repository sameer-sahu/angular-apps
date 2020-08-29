import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    // To add the class - open and remove with isOpen true of false
    @HostBinding('class.open') isOpen = false;

    // To listen the dropdown event
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}