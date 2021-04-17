import * as tsx from 'vue-tsx-support';
import { VApp } from 'vuetify/lib';

type Props = {
  /**
   * Sets the DOM id on the component
   */
  id?: string;
};

export default tsx.ofType<Props>().convert(VApp);
