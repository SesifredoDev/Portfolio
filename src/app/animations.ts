import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild(), { optional: true }),  //adding here solved my problem
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%', opacity: 0 })),
      ]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
  ]),
])