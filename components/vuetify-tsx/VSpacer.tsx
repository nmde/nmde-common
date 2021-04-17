import * as tsx from 'vue-tsx-support';
import { VSpacer } from 'vuetify/lib';

type Props = Record<string, never>;

export default tsx.ofType<Props>().convert(VSpacer);
