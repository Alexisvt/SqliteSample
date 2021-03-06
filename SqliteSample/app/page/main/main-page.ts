import { Observable, EventData } from 'data/observable';
import { Page } from 'ui/page';
import { MainViewModel } from './main-view-model';

export function onLoaded(args: EventData) {
    let vm = new MainViewModel();
    let page = <Page>args.object;
    page.bindingContext = vm;
}

