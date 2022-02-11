import { Options, Vue } from 'vue-class-component';
import Tile from './common/components/tile/tile.component.vue';

@Options({ components: { Tile } })
export default class App extends Vue {
  /*
   * Handlers
   */

  public onClickTile(): void {
    this.changeColors();
  }

  /*
   * Methods
   */

  public changeColors(): void {
    const tiles: any = document.querySelectorAll('.tile.is-child');

    for (let i = 0; i < tiles.length; i++) {
      tiles[i].style.background = `#${this.randomColor()}`;
    }
  }

  public randomColor(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  /*
   * Lifecycle
   */

  public mounted(): void {
    this.changeColors();
  }
}
