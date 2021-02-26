import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

interface MapArgs {
  lng: number | undefined;
  lat: number | undefined;
  width: string;
  height: string;
  zoom: string;
}

export default class MapComponent extends Component<MapArgs> {
  get lng(): number {
    assert('Please provide `lng` arg', this.args.lng);
    return this.args.lng;
  }

  get lat(): number {
    assert('Please provide `lat` arg', this.args.lat);
    return this.args.lat;
  }

  get src(): string {
    let { width, height, zoom } = this.args;
    let { lng, lat } = this;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token(): string {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
