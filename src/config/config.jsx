import { environments } from '@constants/environments';

import * as configs from '@env';

const environment = process.env.REACT_APP_ENVIRONMENT || environments.development;
const config = configs[environment];

export { config };