import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import IndexRoute from 'super-rentals/routes';
import { ModelFrom } from 'super-rentals/types/util';

interface RentalsArgs {
  rentals: ModelFrom<IndexRoute>;
}

export default class RentalsComponent extends Component<RentalsArgs> {
  @tracked query = '';
}
