import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({})
export default class extends Vue {
  @Prop({ required: false, default: false })
  public isParent!: boolean;

  @Prop({ required: false, default: false })
  public isChild!: boolean;

  @Prop({ required: false, default: false })
  public isLarge!: boolean;

  /*
   * Computed
   */

  public get customClass(): Record<string, boolean> {
    return { 'is-parent': this.isParent, 'is-child': this.isChild, 'is-large': this.isLarge };
  }
}
