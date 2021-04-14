import { Directive, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class SubscriberComponent implements OnDestroy {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private subscription = new Subscription();

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  protected subscribe(toSubscription: Subscription): this;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  protected subscribe<T>(
    toObservable: Observable<T>,
    withFn?: (value: T) => void,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError?: (err: any) => void,
    onComplete?: () => void): this;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  protected subscribe<T>(
    toObservableOrSubscription: Observable<T> | Subscription,
    withFn?: (value: T) => void,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError?: (err: any) => void,
    onComplete?: () => void,
  ): this {
    if (toObservableOrSubscription instanceof Subscription) {
      this.subscription.add(toObservableOrSubscription);
      return this;
    }

    this.subscription.add(toObservableOrSubscription.subscribe(
      withFn && withFn.bind(this),
      onError && onError.bind(this),
      onComplete && onComplete.bind(this),
    ));
    return this;
  }
}
