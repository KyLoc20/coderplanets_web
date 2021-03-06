// a.k.a for HOME COMMUNITY NAME
export const HCN = 'home'

export { default as TYPE } from './type'
export { default as EVENT } from './event'
export { default as ERR } from './err'
export { default as ROUTE } from './route'
export { default as TOPIC } from './topic'
export { THREAD, COMMUNITY_SPEC_THREADS } from './thread'
export { default as USER_THREAD } from './user_thread'
export { default as FILTER } from './filter'
export { default as ACTION } from './action'
export { default as C11N } from './c11n'
export { default as GUIDE } from './guide'
export { default as RECIPE } from './recipe'
export { default as GALLERY } from './gallery'
export { default as VIEW } from './view'
export { default as ANCHOR } from './anchor'
export { default as METRIC } from './metric'
export { default as SIZE } from './size'
export { default as URL_QUERY } from './url_query'

export { PAYMENT_USAGE, PAYMENT_METHOD } from './payment'

/* some svg icon are sensitive to fill color */
/* some community svg need fill color, like city etc.. */
export const NON_FILL_COMMUNITY = ['javascript']
