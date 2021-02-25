import Component from '@glimmer/component';
import RentalsComponent from 'super-rentals/components/rentals';
import RentalModel from 'super-rentals/models/rental';
import IndexRoute from 'super-rentals/routes';
import { ModelFrom } from 'super-rentals/types/util';

interface RentalsFilterArgs {
  rentals: ModelFrom<IndexRoute>;
  query: RentalsComponent['query'];
}

export default class RentalsFilterComponent extends Component<RentalsFilterArgs> {
  get results(): Array<RentalModel> {
    let { query } = this.args;
    let rentals = this.args.rentals.toArray();

    if (query) {
      rentals = rentals.filter((rental) => rental.title.includes(query));
    }

    return rentals;
  }
}
