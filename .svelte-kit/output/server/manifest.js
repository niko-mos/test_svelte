export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/imgs/.home-back.jpg","assets/imgs/footer-logo.svg","assets/imgs/home-back.jpg","assets/imgs/logo.svg","assets/imgs/profile-photo.jpg","assets/imgs/scroll_arrow.png","assets/imgs/signature-white.png","assets/imgs/svg-icons/android.svg","assets/imgs/svg-icons/firebase.svg","assets/imgs/svg-icons/flutter.svg","assets/imgs/svg-icons/gcp.svg","assets/imgs/svg-icons/iOS.svg","assets/imgs/svg-icons/nodejs.svg","assets/imgs/svg-icons/php.svg","assets/imgs/svg-icons/react.svg","assets/imgs/svg-icons/svelte.svg","assets/imgs/work/0W7A9478.jpg","assets/imgs/work/1.tif","assets/imgs/work/IMG_4282.jpg","assets/imgs/work/IMG_5853.JPG","assets/imgs/work/IMG_7088.jpg","assets/imgs/work/SIXA0483.JPG","assets/imgs/work-back/grillzzy/cover.jpg","assets/imgs/work-back/iconopis/cover.jpg","assets/imgs/work-back/kic/cover.jpg","assets/imgs/work-back/kwa/cover.jpg","assets/imgs/work-back/lcml/cover.jpg","assets/imgs/work-back/slickscroll/cover.jpg","assets/imgs/work-back/v1/cover.jpg","data/data.json","data/work-data.json","favicon.ico","robots.txt","sitemap.xml"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png",".tif":"image/tiff",".JPG":"image/jpeg",".json":"application/json",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.piS8j_hJ.js","app":"_app/immutable/entry/app.r-9UUgDp.js","imports":["_app/immutable/entry/start.piS8j_hJ.js","_app/immutable/chunks/entry.Z3Qiri1Z.js","_app/immutable/chunks/scheduler.GOssmixh.js","_app/immutable/chunks/index.8NwuiTUI.js","_app/immutable/entry/app.r-9UUgDp.js","_app/immutable/chunks/scheduler.GOssmixh.js","_app/immutable/chunks/index.t7KkFELy.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
