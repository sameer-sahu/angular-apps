import { Pipe, PipeTransform } from '@angular/core';

// Custom Pipe
@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    // Override Abstract Method from the PipeTransform interface
    /* transform(value: any) {
        if(value.length > 10) {
            return value.substr(0, 10) + ' ...';
        }
        
        return value;
    } */

    // Parameterized Pipes
    transform(value: any, limit: number) {
        if(value.length > limit) {
            return value.substr(0, limit) + ' ...';
        }
        
        return value;
    }
}