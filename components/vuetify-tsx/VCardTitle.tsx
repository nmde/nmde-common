import * as tsx from 'vue-tsx-support';
import { VCardTitle } from 'vuetify/lib';

type Props = Record<string, never>;

export default tsx.ofType<Props>().convert(VCardTitle);
