

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5wDYu5KG.js","_app/immutable/chunks/scheduler.GOssmixh.js","_app/immutable/chunks/index.t7KkFELy.js"];
export const stylesheets = [];
export const fonts = [];
