import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _be12fb2e = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _2f58c421 = () => import('..\\pages\\archives.vue' /* webpackChunkName: "pages_archives" */).then(m => m.default || m)
const _4b3437d0 = () => import('..\\pages\\admin\\update.vue' /* webpackChunkName: "pages_admin_update" */).then(m => m.default || m)
const _f7e8cdb0 = () => import('..\\pages\\admin\\tags.vue' /* webpackChunkName: "pages_admin_tags" */).then(m => m.default || m)
const _14867b20 = () => import('..\\pages\\admin\\comment.vue' /* webpackChunkName: "pages_admin_comment" */).then(m => m.default || m)
const _0ca98044 = () => import('..\\pages\\admin\\private.vue' /* webpackChunkName: "pages_admin_private" */).then(m => m.default || m)
const _0247df9a = () => import('..\\pages\\admin\\publish\\_id.vue' /* webpackChunkName: "pages_admin_publish__id" */).then(m => m.default || m)
const _5f721cc1 = () => import('..\\pages\\tags\\_id.vue' /* webpackChunkName: "pages_tags__id" */).then(m => m.default || m)
const _195e44ee = () => import('..\\pages\\detail\\_id.vue' /* webpackChunkName: "pages_detail__id" */).then(m => m.default || m)
const _9086bbdc = () => import('..\\pages\\search\\_id.vue' /* webpackChunkName: "pages_search__id" */).then(m => m.default || m)
const _5162415c = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/login",
			component: _be12fb2e,
			name: "login"
		},
		{
			path: "/archives",
			component: _2f58c421,
			name: "archives"
		},
		{
			path: "/admin/update",
			component: _4b3437d0,
			name: "admin-update"
		},
		{
			path: "/admin/tags",
			component: _f7e8cdb0,
			name: "admin-tags"
		},
		{
			path: "/admin/comment",
			component: _14867b20,
			name: "admin-comment"
		},
		{
			path: "/admin/private",
			component: _0ca98044,
			name: "admin-private"
		},
		{
			path: "/admin/publish/:id?",
			component: _0247df9a,
			name: "admin-publish-id"
		},
		{
			path: "/tags/:id?",
			component: _5f721cc1,
			name: "tags-id"
		},
		{
			path: "/detail/:id?",
			component: _195e44ee,
			name: "detail-id"
		},
		{
			path: "/search/:id?",
			component: _9086bbdc,
			name: "search-id"
		},
		{
			path: "/",
			component: _5162415c,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
