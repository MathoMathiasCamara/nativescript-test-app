import {
  EventData,
  Observable,
  ObservableArray,
  Page,
} from '@nativescript/core';
import { HelloWorldModel } from './main-view-model';

class ViewModel extends Observable {
  items: ObservableArray<string>;
  constructor() {
    super();

    this.items = new ObservableArray<string>(['item 1', 'item 2']);
  }
}

let viewModel = new ViewModel();
export function pageLoaded(args: EventData) {
  const page = <Page>args.object;

  page.bindingContext = viewModel;
}
