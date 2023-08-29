import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('hidden', style({
    opacity: 0
  })),
  state('visible', style({
    opacity: 1
  })),
  transition('hidden => visible', [
    animate('1s ease-in')
  ]),
]);
