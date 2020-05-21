import { endDev, envProd } from '../const/environment';

export const config = process.env.NODE_ENV === 'development' ? endDev : envProd;
