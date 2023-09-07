import { trigger, state, style, animate, transition } from '@angular/animations';

export const dashLeft = trigger('dashLeft', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(-50%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0%)'
  })),
  transition('hidden => visible', [
    animate('1s ease-out')
  ]),
]);
