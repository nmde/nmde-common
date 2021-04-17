import * as tsx from 'vue-tsx-support';
import { VMain } from 'vuetify/lib';
import { Taggable } from './types';

type Props = Taggable;

export default tsx.ofType<Props>().convert(VMain);
