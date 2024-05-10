import { c as create_ssr_component, a as subscribe, b as add_attribute, i as is_promise, n as noop, d as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
import "slickscrolljs";
import { w as writable } from "../../chunks/index.js";
import "animejs";
import "detect-gpu";
import "bezier-easing";
let slickScrollInstance = writable();
let isWorkScroll = writable(false);
let isMobile = writable(false);
let homeAnchor = writable();
let workAnchor = writable();
let aboutAnchor = writable();
let imgPromises = writable([]);
let loadPagePromise = new Promise((resolve) => resolve);
new Promise((resolve) => resolve);
const workItemsFetch = writable();
const siteDataFetch = writable();
async function loadImage(src) {
  const promise = new Promise(async (resolve, reject) => {
    const blob = await (await fetch(src)).blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
  imgPromises.update((val) => [...val, promise]);
  return promise;
}
const css$7 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");@import url("https://use.typekit.net/goc4cow.css");@media only screen and (max-width: 750px){.paragraph.svelte-1v57rq0.svelte-1v57rq0{font-size:3.4vw !important}.title.svelte-1v57rq0.svelte-1v57rq0{font-size:22vw}}@media only screen and (min-width: 750px){.title.svelte-1v57rq0.svelte-1v57rq0{font-size:19vh}}@media only screen and (min-width: 950px){.paragraph.svelte-1v57rq0.svelte-1v57rq0{font-size:1.8vh;line-height:150%;width:60%;letter-spacing:0.05vw}}@media only screen and (max-width: 950px){.paragraph.svelte-1v57rq0.svelte-1v57rq0{font-size:2vw;line-height:180% !important;letter-spacing:0;width:100% !important}}.title.svelte-1v57rq0.svelte-1v57rq0{color:white;font-weight:700;font-style:normal;font-family:freight-big-pro, serif;text-transform:lowercase;line-height:80%}.paragraph.svelte-1v57rq0.svelte-1v57rq0{font-family:"Questrial", sans-serif;color:white}#content-container.svelte-1v57rq0.svelte-1v57rq0{height:100vh;width:100vw;padding:12vh 7vw;box-sizing:border-box;position:relative}#content-container.svelte-1v57rq0 .content-wrapper.svelte-1v57rq0{position:relative;height:100%;box-sizing:border-box;z-index:2}#content-container.svelte-1v57rq0 .flex.svelte-1v57rq0{z-index:2;width:95%;height:100%;display:flex;flex-direction:row;justify-content:space-between;position:relative;box-sizing:border-box}#content-container.svelte-1v57rq0 .flex .flex-wrapper.svelte-1v57rq0{position:relative;height:100%;display:flex;flex-direction:column;justify-content:center}#content-container.svelte-1v57rq0 .flex .flex-wrapper.second.svelte-1v57rq0{margin-right:5vw;justify-content:flex-end}#content-container.svelte-1v57rq0 .flex .flex-wrapper h1.svelte-1v57rq0{font-weight:400;text-shadow:0px 5px 10px rgba(0, 0, 0, 0.3)}#content-container.svelte-1v57rq0 .flex .flex-wrapper .title-mask.svelte-1v57rq0{overflow:hidden;display:inline-flex}#content-container.svelte-1v57rq0 .flex .flex-wrapper .mask.svelte-1v57rq0{overflow:hidden}#content-container.svelte-1v57rq0 .flex .flex-wrapper .occupation.svelte-1v57rq0{position:relative;margin-top:8vh}#content-container.svelte-1v57rq0 .flex .flex-wrapper .action-mask.svelte-1v57rq0{margin-top:10vh;margin-right:7vw;display:inline-flex;overflow:hidden}#content-container.svelte-1v57rq0 .flex .flex-wrapper .action-mask .action.svelte-1v57rq0{font-size:2vh;letter-spacing:0.5vh;font-family:"Questrial", sans-serif;text-transform:uppercase;color:white;position:relative;display:inline-flex;flex-direction:row;align-items:center}#content-container.svelte-1v57rq0 .flex .flex-wrapper .action-mask .action .mask.svelte-1v57rq0{overflow:hidden;height:2vh}#content-container.svelte-1v57rq0 .flex .flex-wrapper .action-mask .action .mask img.svelte-1v57rq0{height:2.3vh;margin-right:1.5vh;animation:svelte-1v57rq0-scrollArrowLoop 3s ease infinite}#content-container.svelte-1v57rq0 .parallax-wrapper.svelte-1v57rq0{position:absolute;left:0;z-index:-1;width:80%;height:100%;margin-left:5%;border-radius:1.5vh;overflow:hidden;box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:box-shadow 0.6s ease;-webkit-transition:box-shadow 0.6s ease}@media only screen and (max-width: 1250px){#content-container.svelte-1v57rq0 .parallax-wrapper.svelte-1v57rq0{opacity:0.7}}@media only screen and (max-width: 750px){#content-container.svelte-1v57rq0 .parallax-wrapper.svelte-1v57rq0{opacity:0.3}}#content-container.svelte-1v57rq0 .parallax-wrapper img.svelte-1v57rq0{height:100%;width:100%;object-fit:cover;border-radius:1.5vh}@media only screen and (min-width: 1250px){.occupation.svelte-1v57rq0.svelte-1v57rq0{width:100%}#content-container.svelte-1v57rq0 .flex .svelte-1v57rq0{text-align:left}}@media only screen and (max-width: 1250px){#content-container.svelte-1v57rq0 .flex .svelte-1v57rq0{text-align:left}.flex.svelte-1v57rq0.svelte-1v57rq0{justify-content:center !important;width:100% !important}.flex.svelte-1v57rq0 .flex-wrapper.first.svelte-1v57rq0{display:none !important}.flex.svelte-1v57rq0 .flex-wrapper.second.svelte-1v57rq0{justify-content:center !important;margin:0}.parallax-wrapper.svelte-1v57rq0.svelte-1v57rq0{width:100% !important;margin-left:0 !important}}@media only screen and (max-width: 750px){.occupation.svelte-1v57rq0.svelte-1v57rq0{width:70%}}@keyframes svelte-1v57rq0-scrollArrowLoop{0%{transform:translateY(-120%)}30%{transform:translateY(0%)}70%{transform:translateY(0%)}100%{transform:translateY(120%)}}',
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_slickScrollInstance;
  let $$unsubscribe_homeAnchor;
  $$unsubscribe_slickScrollInstance = subscribe(slickScrollInstance, (value) => value);
  $$unsubscribe_homeAnchor = subscribe(homeAnchor, (value) => value);
  let homeContainerElement;
  let backgroundContainerElement, backgroundImageElement;
  let titleWord1Element, titleWord2Element, shortDetailsElement, callToActionElement;
  $$result.css.add(css$7);
  $$unsubscribe_slickScrollInstance();
  $$unsubscribe_homeAnchor();
  return `<div id="content-container" style="padding-top: 23vh" class="svelte-1v57rq0"${add_attribute("this", homeContainerElement, 0)}><div class="content-wrapper svelte-1v57rq0"><div class="flex svelte-1v57rq0"><div class="flex-wrapper first svelte-1v57rq0" data-svelte-h="svelte-ws33f2">                       </div> <div class="flex-wrapper second svelte-1v57rq0"><h1 class="title svelte-1v57rq0"><div class="title-mask svelte-1v57rq0"><div class="word svelte-1v57rq0"${add_attribute("this", titleWord1Element, 0)} data-svelte-h="svelte-ljur9j">Евгения</div> </div><br class="svelte-1v57rq0"> <div class="title-mask svelte-1v57rq0"><div class="word svelte-1v57rq0"${add_attribute("this", titleWord2Element, 0)} data-svelte-h="svelte-dx5kzw">Родина</div></div></h1> <div class="occupation mask svelte-1v57rq0"><p class="paragraph svelte-1v57rq0"${add_attribute("this", shortDetailsElement, 0)} data-svelte-h="svelte-1fi2rfr">художник, специалист в области иконописи и росписи храмов, Россия</p></div> <div class="wrapper action-mask svelte-1v57rq0"><div class="action svelte-1v57rq0"${add_attribute("this", callToActionElement, 0)}><div class="mask svelte-1v57rq0">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(src) {
      return ` <img${add_attribute("src", src, 0)} alt="" class="svelte-1v57rq0"> `;
    }(__value);
  }(loadImage("assets/imgs/scroll_arrow.png"))}</div> <div class="svelte-1v57rq0" data-svelte-h="svelte-1abg4og">scroll</div></div></div></div> <div class="parallax-wrapper home-back svelte-1v57rq0"${add_attribute("this", backgroundContainerElement, 0)}>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(src) {
      return ` <img${add_attribute("src", src, 0)} draggable="false" alt="Home Background" style="width:100%; height: 100%; object-fit: cover;" class="svelte-1v57rq0"${add_attribute("this", backgroundImageElement, 0)}> `;
    }(__value);
  }(loadImage("assets/imgs/home-back.jpg"))}</div></div></div> </div>`;
});
const css$6 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");@import url("https://use.typekit.net/goc4cow.css");button.interactive.svelte-zppgex.svelte-zppgex{position:default;display:default;border:none;background-color:transparent;outline:none;color:inherit;font-family:inherit;font-weight:inherit;font-size:inherit}@media only screen and (max-width: 750px){.paragraph.svelte-zppgex.svelte-zppgex{font-size:3.4vw !important}.title.svelte-zppgex.svelte-zppgex{font-size:22vw}}@media only screen and (min-width: 750px){.title.svelte-zppgex.svelte-zppgex{font-size:19vh}}@media only screen and (min-width: 950px){.paragraph.svelte-zppgex.svelte-zppgex{font-size:1.8vh;line-height:150%;width:60%;letter-spacing:0.05vw}}@media only screen and (max-width: 950px){.paragraph.svelte-zppgex.svelte-zppgex{font-size:2vw;line-height:180% !important;letter-spacing:0;width:100% !important}}.title.svelte-zppgex.svelte-zppgex{color:white;font-weight:700;font-style:normal;font-family:freight-big-pro, serif;text-transform:lowercase;line-height:80%}.paragraph.svelte-zppgex.svelte-zppgex{font-family:"Questrial", sans-serif;color:white}.button.svelte-zppgex.svelte-zppgex{font-family:"Questrial", sans-serif;text-transform:lowercase;color:white;display:inline-block;position:relative;cursor:pointer;padding-bottom:1%;text-decoration:none}.button.svelte-zppgex.svelte-zppgex:not(.no-decor)::after,.button.svelte-zppgex.svelte-zppgex:not(.no-decor)::before{content:"";position:absolute;width:100%;height:2px;bottom:0;background-color:white}.button.svelte-zppgex.svelte-zppgex:not(.no-decor)::after{left:0;width:0%}.button.svelte-zppgex.svelte-zppgex:not(.no-decor)::before{right:0;width:100%}.button.svelte-zppgex.svelte-zppgex:not(.no-decor):hover::after{width:100%;transition:width 0.8s ease}.button.svelte-zppgex.svelte-zppgex:not(.no-decor):hover::before{width:0%;transition:width 0.5s ease}#content-container.work-click-area.svelte-zppgex.svelte-zppgex{margin-top:30vh}#content-container.work-click-area.svelte-zppgex .content-wrapper.svelte-zppgex{display:flex;flex-direction:column;cursor:grab;position:relative}#content-container.work-click-area.svelte-zppgex .content-wrapper.disabled.svelte-zppgex{cursor:default !important}#content-container.work-click-area.svelte-zppgex .content-wrapper.disabled .mobile ul.work-list.svelte-zppgex{opacity:0}#content-container.work-click-area.svelte-zppgex .content-wrapper .mobile.svelte-zppgex{width:100%;height:100%;overflow-x:auto}#content-container.work-click-area.svelte-zppgex .content-wrapper .svelte-zppgex{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container.svelte-zppgex{position:absolute;left:0;top:0;height:100%;width:100%;display:flex;flex-direction:row;justify-content:space-between;box-sizing:border-box;padding:0 14vw}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper.svelte-zppgex{text-align:left;position:relative;display:flex;flex-direction:column;justify-content:space-between;flex-basis:100%}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .top-align .wrapper.svelte-zppgex{display:inline-flex;flex-direction:row;align-items:center;justify-content:left;position:relative}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .top-align .wrapper h6.caption.svelte-zppgex{position:relative;font-family:"Questrial", sans-serif;text-transform:uppercase;font-weight:normal;font-size:1.9vh}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .top-align .wrapper .index.svelte-zppgex{font-family:"Questrial", sans-serif;position:relative;font-size:2.1vh}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .top-align .wrapper span.line.svelte-zppgex{width:300%;margin:0 10%;height:1.5px;background-color:white}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align.svelte-zppgex{display:flex;flex-direction:row;align-items:center;justify-content:space-between}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align h1.title.svelte-zppgex{position:relative;font-family:freight-big-pro, serif;font-size:7vw;text-transform:lowercase;font-weight:normal;word-wrap:break-word;white-space:normal;line-height:100%}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align h1.title.breakTitleWords.svelte-zppgex{display:inline-block;max-width:min-content}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align .close-button.svelte-zppgex{cursor:pointer;font-size:3.3vw}@media only screen and (max-width: 750px){#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align.svelte-zppgex{flex-direction:column;justify-content:flex-start;align-items:flex-start}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align h1.title.svelte-zppgex{font-size:16.5vw}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align .close-button-wrapper.svelte-zppgex{position:absolute;top:0;right:0}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align .close-button-wrapper .close-button.svelte-zppgex{font-size:5vh}}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align.svelte-zppgex{display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:5vh}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .svelte-zppgex{flex-grow:1;flex-basis:0}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align p.svelte-zppgex{font-size:1.3vh;width:65%}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .roles.svelte-zppgex{display:flex;flex-direction:column;align-items:center}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .roles .descriptor.svelte-zppgex{line-height:270%;letter-spacing:0.5vh;font-family:"Questrial", sans-serif;text-transform:uppercase;font-weight:normal;font-size:1.4vh}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .roles ul.svelte-zppgex{list-style-type:none;display:flex;flex-direction:column}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .roles ul li.svelte-zppgex{font-family:"Questrial", sans-serif;text-transform:uppercase;font-weight:normal;font-size:1.7vh;line-height:160%}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .links.svelte-zppgex{position:relative;display:flex;flex-direction:column;align-items:flex-end;gap:2vh}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .links .button.svelte-zppgex{font-size:1.1vw;letter-spacing:0.2vw;text-transform:uppercase;text-decoration:none;line-height:160%}@media only screen and (max-width: 750px){#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align.svelte-zppgex{flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:1vh}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align p.svelte-zppgex{font-size:1.6vh !important}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .links.svelte-zppgex{margin:2vh 0;align-items:flex-start}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .links .button.svelte-zppgex{font-size:2vh;position:relative}}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list.svelte-zppgex{margin-top:auto;margin:auto 0;padding:0 5vw;list-style-type:none;display:flex;flex-direction:row;align-items:center;height:75vh;min-width:min-content;opacity:1;transition:opacity 0.5s ease;-webkit-transition:opacity 0.5s ease}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list.hold .list-item.svelte-zppgex{height:45vh !important}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.svelte-zppgex{display:inline-flex;justify-content:flex-end;overflow:hidden;height:55vh;width:23vw;box-sizing:border-box;position:relative;overflow:hidden;z-index:3;margin-right:6vw;transition:width 0.7s cubic-bezier(0.25, 1, 0.5, 1), height 0.7s cubic-bezier(0.25, 1, 0.5, 1), margin 0.8s cubic-bezier(0.25, 1, 0.5, 1)}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .svelte-zppgex{transition:opacity 0.3s ease;-webkit-transition:opacity 0.3s ease}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.active.svelte-zppgex{height:60vh;width:50vw;margin-right:16vw;margin-left:10vw}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.active .img-wrapper.svelte-zppgex{width:100%}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.ambient.svelte-zppgex{height:45vh}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .hidden.svelte-zppgex{opacity:0}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .img-wrapper.svelte-zppgex{overflow:hidden;height:100%;z-index:1;position:relative;width:85%;margin-right:15%;box-shadow:3px 9px 18px rgba(0, 0, 0, 0.2)}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .img-wrapper img.svelte-zppgex{height:110%;width:110%;object-fit:cover;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);opacity:0.5}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-top-wrapper.svelte-zppgex{position:absolute;top:6vh;right:0;z-index:2;word-wrap:break-word;white-space:normal;text-align:right}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-top-wrapper .item-index.svelte-zppgex{font-size:1vw;letter-spacing:0.1vw;text-transform:uppercase;font-family:"Questrial", sans-serif}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper.svelte-zppgex{box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-end;position:absolute;bottom:10vh;right:0;text-align:right;z-index:2}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper .button.svelte-zppgex{font-size:1.3vw;letter-spacing:0.1vw;margin-top:2vh;text-transform:uppercase}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper .item-title.svelte-zppgex{font-family:"Questrial", sans-serif;font-weight:normal;font-size:2.5vw;z-index:0;opacity:1;letter-spacing:0.1vw;line-height:110%;word-spacing:80vw;text-transform:lowercase;word-wrap:break-word;white-space:normal}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper .inline-wrapper .svelte-zppgex{display:inline-block}@media only screen and (max-width: 1450px){#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.svelte-zppgex{width:25vw}}@media only screen and (max-width: 1110px){#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.svelte-zppgex{width:40vw}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-top-wrapper .item-index.svelte-zppgex{font-size:2vh}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper.svelte-zppgex{width:calc(55vw - 10vh)}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper .item-title.svelte-zppgex{font-size:5vw}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper .item-link.svelte-zppgex{font-size:2vh}}@media only screen and (max-width: 650px){#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.svelte-zppgex{width:75vw}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper.svelte-zppgex{width:calc(70vw - 10vh)}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper .item-title.svelte-zppgex{font-size:4.5vh}}',
  map: null
};
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workAnchor;
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_workAnchor = subscribe(workAnchor, (value) => value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  let data = [];
  workItemsFetch.subscribe((val) => {
    if (val !== void 0)
      data = val;
  });
  let isMouseDown = false;
  isWorkScroll.subscribe((val) => isMouseDown = val);
  let workContainer;
  let container, listContainer;
  let images = [];
  let workItems = [];
  let currentActive = -1;
  const inViewPromise = new Promise((resolve) => {
  });
  $$result.css.add(css$6);
  $$unsubscribe_workAnchor();
  $$unsubscribe_isMobile();
  return `<div id="content-container" class="work-click-area svelte-zppgex"${add_attribute("this", workContainer, 0)}><div class="${["content-wrapper svelte-zppgex", ""].join(" ").trim()}" role="listbox" tabindex="0"${add_attribute("this", container, 0)}><div class="${["svelte-zppgex", $isMobile ? "mobile" : ""].join(" ").trim()}"><ul class="${["work-list svelte-zppgex", isMouseDown ? "hold" : ""].join(" ").trim()}"${add_attribute("this", listContainer, 0)}> ${each(data, (item, i) => {
    return `<li class="svelte-zppgex"><div class="${[
      "list-item clickable passive svelte-zppgex",
      (currentActive !== i && currentActive >= 0 ? "ambient" : "") + " " + (currentActive === i ? "active" : "")
    ].join(" ").trim()}"${add_attribute("this", workItems[i], 0)}><div class="img-wrapper svelte-zppgex">${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(src) {
        return ` <img${add_attribute("src", src, 0)} draggable="false" alt="${escape(item.title, true) + " Background"}" class="svelte-zppgex"${add_attribute("this", images[i], 0)}> `;
      }(__value);
    }(loadImage(`assets/imgs/work-back/${item.id}/cover.jpg`))}</div> ${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(_) {
        return ` <div class="${[
          "text-top-wrapper svelte-zppgex",
          isMouseDown ? "hidden" : ""
        ].join(" ").trim()}"><p class="item-index svelte-zppgex">${escape(i.toString().length > 1 ? i + 1 : "0" + (i + 1).toString())} </p></div> <div class="${[
          "text-wrapper svelte-zppgex",
          isMouseDown ? "hidden" : ""
        ].join(" ").trim()}"><h1 class="item-title svelte-zppgex"><span class="svelte-zppgex">${escape(item.title)} </span></h1> <button class="button item-link interactive svelte-zppgex" data-svelte-h="svelte-6jg3a6">view
									</button></div> `;
      }();
    }(inViewPromise)}</div> </li>`;
  })}</ul></div>  ${``}</div> </div>`;
});
const css$5 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");@import url("https://use.typekit.net/goc4cow.css");@media only screen and (max-width: 750px){.paragraph.svelte-l800rr.svelte-l800rr{font-size:3.4vw !important}.title.svelte-l800rr.svelte-l800rr{font-size:22vw}}@media only screen and (min-width: 750px){.title.svelte-l800rr.svelte-l800rr{font-size:19vh}}@media only screen and (min-width: 950px){.paragraph.svelte-l800rr.svelte-l800rr{font-size:1.8vh;line-height:150%;width:60%;letter-spacing:0.05vw}}@media only screen and (max-width: 950px){.paragraph.svelte-l800rr.svelte-l800rr{font-size:2vw;line-height:180% !important;letter-spacing:0;width:100% !important}}.title.svelte-l800rr.svelte-l800rr{color:white;font-weight:700;font-style:normal;font-family:freight-big-pro, serif;text-transform:lowercase;line-height:80%}.paragraph.svelte-l800rr.svelte-l800rr{font-family:"Questrial", sans-serif;color:white}.button.svelte-l800rr.svelte-l800rr{font-family:"Questrial", sans-serif;text-transform:lowercase;color:white;display:inline-block;position:relative;cursor:pointer;padding-bottom:1%;text-decoration:none}.button.svelte-l800rr a.svelte-l800rr{text-decoration:none;color:inherit;display:inline-block}.button.svelte-l800rr.svelte-l800rr:not(.no-decor)::after,.button.svelte-l800rr.svelte-l800rr:not(.no-decor)::before{content:"";position:absolute;width:100%;height:2px;bottom:0;background-color:white}.button.svelte-l800rr.svelte-l800rr:not(.no-decor)::after{left:0;width:0%}.button.svelte-l800rr.svelte-l800rr:not(.no-decor)::before{right:0;width:100%}.button.svelte-l800rr.svelte-l800rr:not(.no-decor):hover::after{width:100%;transition:width 0.8s ease}.button.svelte-l800rr.svelte-l800rr:not(.no-decor):hover::before{width:0%;transition:width 0.5s ease}#content-container.about.svelte-l800rr.svelte-l800rr{display:flex;flex-direction:row;justify-content:space-between;overflow:hidden;padding:0 5vw;margin-top:40vh;position:relative;padding-bottom:5vh}#content-container.about.svelte-l800rr .profile-image.svelte-l800rr{width:55%;overflow:hidden;margin-top:-40vh;position:relative}#content-container.about.svelte-l800rr .profile-image img.svelte-l800rr{height:80%;width:90%;border-radius:0.5vh;object-fit:cover}#content-container.about.svelte-l800rr .content-wrapper.svelte-l800rr{box-sizing:border-box;width:50%;height:100%;margin:0 2vw;padding-right:4vw;display:flex;flex-direction:column;justify-content:center;margin-top:5vh;box-sizing:border-box;z-index:2}@media only screen and (max-width: 950px){#content-container.about.svelte-l800rr .content-wrapper.svelte-l800rr{width:80%}#content-container.about.svelte-l800rr .content-wrapper h1.svelte-l800rr{font-size:25vw !important}}#content-container.about.svelte-l800rr .content-wrapper h1.svelte-l800rr{font-size:20vh;font-weight:400}#content-container.about.svelte-l800rr .content-wrapper .paragraph.svelte-l800rr{margin-top:10vh;margin-left:13vw;position:relative;width:60%;line-height:1.5rem}@media only screen and (max-width: 750px){#content-container.about.svelte-l800rr .content-wrapper .paragraph.svelte-l800rr{width:100%;margin-left:5vw}}#content-container.about.svelte-l800rr .content-wrapper .paragraph.svelte-l800rr::before{content:"";position:absolute;height:1px;width:10vw;right:115%;top:15%;background-color:white}#content-container.about.svelte-l800rr .content-wrapper .social-button-wrapper.svelte-l800rr{font-size:3vh;margin-left:13vw;margin-top:4vh;display:inline-block}#content-container.about.svelte-l800rr .content-wrapper .social-button-wrapper.svelte-l800rr *:not(:last-child){margin-right:2vw}@media only screen and (max-width: 750px){#content-container.about.svelte-l800rr .content-wrapper .social-button-wrapper.svelte-l800rr{margin-left:5vw}}@media only screen and (max-width: 950px){#content-container.about.svelte-l800rr .profile-image.svelte-l800rr{display:none}}.horizontal-flex.svelte-l800rr.svelte-l800rr{display:flex;flex-direction:row;justify-content:space-between;padding:0 13vw;margin-top:12vh;width:100%;box-sizing:border-box}@media only screen and (max-width: 1080px){.horizontal-flex.svelte-l800rr.svelte-l800rr{flex-direction:column;padding:0 8vw}}.horizontal-flex.svelte-l800rr .list.svelte-l800rr{list-style-type:none;text-align:left}@media only screen and (max-width: 1080px){.horizontal-flex.svelte-l800rr .list.svelte-l800rr{margin-top:10vh}}.horizontal-flex.svelte-l800rr .list li.list-title.svelte-l800rr{letter-spacing:0.6vh;font-size:1.3vh;font-weight:bold}.horizontal-flex.svelte-l800rr .list li.svelte-l800rr{font-family:"Questrial", sans-serif;text-transform:uppercase;font-size:2vh;letter-spacing:0.5vh;padding:2vh 0;border-bottom:1px solid #444;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-between;align-items:center;column-gap:10vw;row-gap:3vh}.horizontal-flex.svelte-l800rr .list li img.svelte-l800rr{height:2.3vh}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_slickScrollInstance;
  let $$unsubscribe_aboutAnchor;
  $$unsubscribe_slickScrollInstance = subscribe(slickScrollInstance, (value) => value);
  $$unsubscribe_aboutAnchor = subscribe(aboutAnchor, (value) => value);
  let section1Element, section2Element;
  let sectionOnePromise = new Promise((resolve) => resolve);
  let sectionTwoPromise = new Promise((resolve) => resolve);
  $$result.css.add(css$5);
  $$unsubscribe_slickScrollInstance();
  $$unsubscribe_aboutAnchor();
  return `<div id="content-container" class="about svelte-l800rr"${add_attribute("this", section1Element, 0)}>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(_) {
      return ` <div class="content-wrapper svelte-l800rr"><h1 class="title svelte-l800rr" data-svelte-h="svelte-i2o3yn">Hey I&#39;m <br>Musab</h1> <div data-svelte-h="svelte-czgzl7"><p class="paragraph svelte-l800rr">I&#39;m a web developer from British Columbia, Canada. I specialize in designing and developing web experiences<br><br>I work with organizations and individuals to create beautiful, responsive, and scalable web products tailor-made for them. Think we can make something great together? Let&#39;s talk over email.</p></div> <div class="social-button-wrapper svelte-l800rr"><div data-svelte-h="svelte-u6qbw4"><span class="button svelte-l800rr"><a href="mailto:musabhassan04@gmail.com" target="_blank" class="clickable sublink link svelte-l800rr">Email Me</a></span></div> <div data-svelte-h="svelte-17u13e"><span class="button svelte-l800rr"><a href="https://github.com/Musab-Hassan" target="_blank" class="clickable sublink link svelte-l800rr">Github</a></span></div></div></div> <div class="profile-image svelte-l800rr">${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(src) {
          return ` <img${add_attribute("src", src, 0)} alt="Musab's Profile" class="profile-pic svelte-l800rr"> `;
        }(__value2);
      }(loadImage("assets/imgs/profile-photo.jpg"))}</div> `;
    }();
  }(sectionOnePromise)}</div> <div class="horizontal-flex svelte-l800rr"${add_attribute("this", section2Element, 0)}>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return /* @__PURE__ */ function(_) {
      return ` <ul class="list first svelte-l800rr"><li class="list-title svelte-l800rr"><div data-svelte-h="svelte-qce6sw">technical expertise</div></li> <li class="svelte-l800rr"><div data-svelte-h="svelte-eh651t">Front-end</div> <div class="flex-item" data-svelte-h="svelte-183ff0p"><img src="assets/imgs/svg-icons/svelte.svg" alt="Svelte" class="svelte-l800rr"> <img src="assets/imgs/svg-icons/react.svg" alt="React" class="svelte-l800rr"></div></li> <li class="svelte-l800rr"><div data-svelte-h="svelte-vw9vq2">Back-end</div> <div class="flex-item" data-svelte-h="svelte-1y6ctek"><img src="assets/imgs/svg-icons/nodejs.svg" alt="node js" class="svelte-l800rr"> <img src="assets/imgs/svg-icons/php.svg" alt="php" class="svelte-l800rr"></div></li> <li class="svelte-l800rr"><div data-svelte-h="svelte-1ita7f2">Dev-ops</div> <div class="flex-item" data-svelte-h="svelte-b8hbwm"><img src="assets/imgs/svg-icons/firebase.svg" alt="Firebase" class="svelte-l800rr"> <img src="assets/imgs/svg-icons/gcp.svg" alt="Google Cloud Platform" class="svelte-l800rr"></div></li> <li class="svelte-l800rr"><div data-svelte-h="svelte-89l7ab">Mobile</div> <div class="flex-item" data-svelte-h="svelte-in4em2"><img src="assets/imgs/svg-icons/flutter.svg" alt="flutter" class="svelte-l800rr"> <img src="assets/imgs/svg-icons/android.svg" alt="native android" class="svelte-l800rr"> <img src="assets/imgs/svg-icons/iOS.svg" alt="native ios" class="svelte-l800rr"></div></li></ul> <ul class="list svelte-l800rr"><li class="list-title svelte-l800rr"><div data-svelte-h="svelte-gfrgtc">awards</div></li> <li class="svelte-l800rr"><div data-svelte-h="svelte-1i4zsg8">1x — Awwwards Honors</div></li></ul> `;
    }();
  }(sectionTwoPromise)} </div>`;
});
const css$4 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");@import url("https://use.typekit.net/goc4cow.css");button.interactive.svelte-11y6gr6.svelte-11y6gr6{border:none;background-color:transparent;cursor:pointer}.nav-wrapper.svelte-11y6gr6.svelte-11y6gr6{width:100vw;margin:0 auto;padding:0 7vw;box-sizing:border-box;display:block;z-index:100;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.nav-wrapper.svelte-11y6gr6 .flex-wrapper.ico.svelte-11y6gr6{overflow:hidden;height:6vh;width:7vh;mix-blend-mode:exclusion;cursor:pointer}.nav-wrapper.svelte-11y6gr6 .flex-wrapper.ico .svelte-11y6gr6{width:100%;height:100%}.nav-wrapper.svelte-11y6gr6 .flex-wrapper.ico .logo-icon.svelte-11y6gr6{position:relative;display:inline-block;height:100%;width:100%}@media only screen and (min-width: 950px){.nav-wrapper.svelte-11y6gr6 ul.nav-list.svelte-11y6gr6{list-style-type:none;mix-blend-mode:exclusion;overflow:hidden}.nav-wrapper.svelte-11y6gr6 ul.nav-list li.svelte-11y6gr6{font-family:"Questrial", sans-serif;text-transform:uppercase;font-size:2vh;letter-spacing:0.2vh;display:inline-flex}.nav-wrapper.svelte-11y6gr6 ul.nav-list li.mobile.svelte-11y6gr6{display:none}.nav-wrapper.svelte-11y6gr6 ul.nav-list li button.svelte-11y6gr6{display:inline-block;cursor:pointer;color:white;font-size:inherit;font-family:inherit;letter-spacing:inherit;text-transform:uppercase}.nav-wrapper.svelte-11y6gr6 ul.nav-list li a.svelte-11y6gr6{display:inline-block;color:white;text-decoration:none}.nav-wrapper.svelte-11y6gr6 ul.nav-list li.svelte-11y6gr6:not(.mobile):not(:last-child)::after{margin-right:0.3vw;margin-left:0.5vw;content:"-"}}@media only screen and (max-width: 950px){.nav-wrapper.svelte-11y6gr6 .wrapper.svelte-11y6gr6{position:fixed;top:-10.1vh;right:0;height:100vh;width:0vw;background-color:#131314;transition:0.9s cubic-bezier(0.58, 0.14, 0.06, 0.97) width;-webkit-transition:0.9s cubic-bezier(0.58, 0.14, 0.06, 0.97) width;-moz-transition:0.9s cubic-bezier(0.58, 0.14, 0.06, 0.97) width;overflow:hidden !important}.nav-wrapper.svelte-11y6gr6 .wrapper ul.nav-list.svelte-11y6gr6{list-style-type:none;display:flex;flex-direction:column;position:relative;justify-content:center;height:100%;width:100%;box-sizing:border-box;padding:0 10vw;padding-top:10vh;overflow:hidden !important}.nav-wrapper.svelte-11y6gr6 .wrapper.mobileMenuActive.svelte-11y6gr6{left:0;width:100vw}.nav-wrapper.svelte-11y6gr6 .wrapper li.svelte-11y6gr6{font-family:"Questrial", sans-serif;font-weight:bolder;text-transform:lowercase;font-size:9vw;display:inline-flex;box-sizing:border-box;padding:2vh 0}.nav-wrapper.svelte-11y6gr6 .wrapper li.svelte-11y6gr6:not(:last-child){border-bottom:1px solid rgba(255, 255, 255, 0.3)}.nav-wrapper.svelte-11y6gr6 .wrapper li button.svelte-11y6gr6{display:inline-block;cursor:pointer;font-size:inherit;font-family:inherit;color:white;text-transform:inherit;font-weight:inherit}.nav-wrapper.svelte-11y6gr6 .wrapper li a.svelte-11y6gr6{display:inline-block;color:white;cursor:pointer;text-decoration:none}}.nav-wrapper.svelte-11y6gr6 .mask.svelte-11y6gr6{overflow:hidden}.nav-wrapper.svelte-11y6gr6 .hb-button.svelte-11y6gr6{cursor:pointer;position:relative;z-index:21}.nav-wrapper.svelte-11y6gr6 .hb-button .svelte-11y6gr6{display:inline-block;vertical-align:middle;user-select:none;-ms-user-select:none;-moz-user-select:none}.nav-wrapper.svelte-11y6gr6 .hb-button .hb.svelte-11y6gr6{display:flex;flex-direction:column;justify-content:center;row-gap:5px;width:3vh;height:2.2vh;margin-right:1.5vh;transition:row-gap 1s ease;-webkit-transition:row-gap 1s ease;-moz-transition:row-gap 1s ease}.nav-wrapper.svelte-11y6gr6 .hb-button .hb span.svelte-11y6gr6{transition:1s ease;-webkit-transition:1s ease;-moz-transition:1s ease;display:block;position:relative;top:0;right:0;height:2px;width:100%;background-color:white}.nav-wrapper.svelte-11y6gr6 .hb-button.mobileMenuActive .hb.svelte-11y6gr6{row-gap:0px}.nav-wrapper.svelte-11y6gr6 .hb-button.mobileMenuActive .hb span.svelte-11y6gr6{background-color:white}.nav-wrapper.svelte-11y6gr6 .hb-button.mobileMenuActive .hb span.svelte-11y6gr6:nth-child(1){transform:translateY(100%) rotate(-45deg);width:100%}.nav-wrapper.svelte-11y6gr6 .hb-button.mobileMenuActive .hb span.svelte-11y6gr6:nth-child(2){width:0%}.nav-wrapper.svelte-11y6gr6 .hb-button.mobileMenuActive .hb span.svelte-11y6gr6:nth-child(3){transform:translateY(-100%) rotate(45deg);width:100%}@media only screen and (min-width: 950px){.hb-button.svelte-11y6gr6.svelte-11y6gr6{display:none}}@media only screen and (max-width: 950px){.hb-button.svelte-11y6gr6.svelte-11y6gr6{display:block}}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_homeAnchor;
  let $$unsubscribe_workAnchor;
  let $$unsubscribe_aboutAnchor;
  $$unsubscribe_homeAnchor = subscribe(homeAnchor, (value) => value);
  $$unsubscribe_workAnchor = subscribe(workAnchor, (value) => value);
  $$unsubscribe_aboutAnchor = subscribe(aboutAnchor, (value) => value);
  let { scrollContainer } = $$props;
  if ($$props.scrollContainer === void 0 && $$bindings.scrollContainer && scrollContainer !== void 0)
    $$bindings.scrollContainer(scrollContainer);
  $$result.css.add(css$4);
  $$unsubscribe_homeAnchor();
  $$unsubscribe_workAnchor();
  $$unsubscribe_aboutAnchor();
  return ` ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(_) {
      return ` <div class="nav-wrapper svelte-11y6gr6" style="transform: translate(0px);"> <div class="flex-wrapper ico svelte-11y6gr6" style="z-index: 21;"><button class="interactive clickable svelte-11y6gr6"><img src="assets/imgs/logo.svg" class="logo-icon svelte-11y6gr6" alt="Logo" draggable="false"></button></div> <div class="flex-wrapper svelte-11y6gr6"> <div class="${["wrapper svelte-11y6gr6", ""].join(" ").trim()}"><ul class="nav-list svelte-11y6gr6"><li class="svelte-11y6gr6"><button class="interactive clickable svelte-11y6gr6" data-svelte-h="svelte-1unzo50">Home</button></li> <li class="svelte-11y6gr6"><button class="interactive clickable svelte-11y6gr6" data-svelte-h="svelte-1y15d6s"><p class="svelte-11y6gr6">Work</p></button></li> <li class="svelte-11y6gr6"><button class="interactive clickable svelte-11y6gr6" data-svelte-h="svelte-1e2bqcf">About</button></li> <li class="mobile svelte-11y6gr6"><a href="mailto:musabhassan04@gmail.com" target="_blank" class="svelte-11y6gr6" data-svelte-h="svelte-133j4vp">Email</a></li> <li class="svelte-11y6gr6"><a href="https://github.com/Musab-Hassan" target="_blank" class="svelte-11y6gr6" data-svelte-h="svelte-den2r8">Github</a></li></ul></div>  <div class="mask svelte-11y6gr6"><button class="${[
        "interactive hb-button clickable svelte-11y6gr6",
        ""
      ].join(" ").trim()}" data-svelte-h="svelte-ddta8z"><div class="hb svelte-11y6gr6"><span class="svelte-11y6gr6"></span> <span class="svelte-11y6gr6"></span> <span class="svelte-11y6gr6"></span></div></button></div></div></div> `;
    }();
  }(loadPagePromise)}`;
});
const css$3 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");@import url("https://use.typekit.net/goc4cow.css");@media only screen and (max-width: 750px){}@media only screen and (min-width: 750px){}@media only screen and (min-width: 950px){}@media only screen and (max-width: 950px){}.button.svelte-g0q3jr.svelte-g0q3jr{font-family:"Questrial", sans-serif;text-transform:lowercase;color:white;display:inline-block;position:relative;cursor:pointer;padding-bottom:1%;text-decoration:none}.button.svelte-g0q3jr.svelte-g0q3jr:not(.no-decor)::after,.button.svelte-g0q3jr.svelte-g0q3jr:not(.no-decor)::before{content:"";position:absolute;width:100%;height:2px;bottom:0;background-color:white}.button.svelte-g0q3jr.svelte-g0q3jr:not(.no-decor)::after{left:0;width:0%}.button.svelte-g0q3jr.svelte-g0q3jr:not(.no-decor)::before{right:0;width:100%}.button.svelte-g0q3jr.svelte-g0q3jr:not(.no-decor):hover::after{width:100%;transition:width 0.8s ease}.button.svelte-g0q3jr.svelte-g0q3jr:not(.no-decor):hover::before{width:0%;transition:width 0.5s ease}.footer-wrapper.svelte-g0q3jr.svelte-g0q3jr{width:100vw;background-color:#131314;display:flex;flex-direction:row;justify-content:space-between;padding:15vh 13vw;margin-top:25vh;box-sizing:border-box}@media only screen and (max-width: 950px){.footer-wrapper.svelte-g0q3jr .flex-wrapper.decor.svelte-g0q3jr{display:none !important}}@media only screen and (max-width: 950px){.footer-wrapper.svelte-g0q3jr.svelte-g0q3jr{flex-direction:column-reverse}.footer-wrapper.svelte-g0q3jr .flex-wrapper.svelte-g0q3jr:not(:first-child){margin-bottom:15vh}}.footer-wrapper.svelte-g0q3jr .inline-flex.svelte-g0q3jr{flex-grow:1;display:flex;flex-direction:row;align-items:center}.footer-wrapper.svelte-g0q3jr .logo-wrapper.svelte-g0q3jr{margin-bottom:5vh}.footer-wrapper.svelte-g0q3jr .logo-wrapper .logo.svelte-g0q3jr{display:inline-block;height:6vh}.footer-wrapper.svelte-g0q3jr .status-wrapper .button.large-text.svelte-g0q3jr{margin-top:2vh}.footer-wrapper.svelte-g0q3jr .credits-wrapper.svelte-g0q3jr{margin-top:5vh;color:rgba(255, 255, 255, 0.3)}.footer-wrapper.svelte-g0q3jr .credits-wrapper p.year.svelte-g0q3jr{margin-bottom:1vh;font-family:"Questrial", sans-serif;font-size:1.8vh;font-weight:normal;color:rgba(255, 255, 255, 0.3)}.footer-wrapper.svelte-g0q3jr .credits-wrapper .credits.svelte-g0q3jr{font-size:1.5vh;line-height:125%;white-space:nowrap;color:rgba(255, 255, 255, 0.3)}.footer-wrapper.svelte-g0q3jr .credits-wrapper .credits .button.svelte-g0q3jr{color:rgba(255, 255, 255, 0.3)}.footer-wrapper.svelte-g0q3jr .large-text.svelte-g0q3jr{font-size:2.5vh}@media only screen and (max-width: 950px){.footer-wrapper.svelte-g0q3jr .large-text br.svelte-g0q3jr{display:none}}.footer-wrapper.svelte-g0q3jr .flex-wrapper.decor.svelte-g0q3jr{display:flex;flex-direction:column;justify-content:center}.footer-wrapper.svelte-g0q3jr .flex-wrapper.decor .name-signature.svelte-g0q3jr{width:20vh}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let footerContainerElement, logoElement, creditsElement, statusElement, fullEmailLinkElement;
  let siteData = { availablity_date: "" };
  siteDataFetch.subscribe((val) => {
    if (val !== void 0)
      siteData = val;
  });
  const currentYear = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
  $$result.css.add(css$3);
  return `<div class="footer-wrapper svelte-g0q3jr"${add_attribute("this", footerContainerElement, 0)}> <div class="flex-wrapper svelte-g0q3jr"><div class="logo-wrapper svelte-g0q3jr"><div class="inline-flex svelte-g0q3jr"${add_attribute("this", logoElement, 0)} data-svelte-h="svelte-22qnc3"><img src="assets/imgs/logo.svg" alt="mh logo" class="logo svelte-g0q3jr"></div></div> <div class="status-wrapper">${siteData.availablity_date === "" ? `<p class="large-text svelte-g0q3jr"${add_attribute("this", statusElement, 0)} data-svelte-h="svelte-18ln10j">i am currently accepting freelance work, <br class="svelte-g0q3jr">you may reach me on my email.</p>` : `<p class="large-text svelte-g0q3jr"${add_attribute("this", statusElement, 0)}>i am available for freelance work after <br class="svelte-g0q3jr"> ${escape(siteData.availablity_date)}.</p>`} <a class="button large-text svelte-g0q3jr" href="mailto:musabhassan04@gmail.com" target="_blank"${add_attribute("this", fullEmailLinkElement, 0)} data-svelte-h="svelte-10rbyzm">musabhassan04@gmail.com</a></div> <div class="credits-wrapper svelte-g0q3jr"${add_attribute("this", creditsElement, 0)}><p class="year svelte-g0q3jr">© ${escape(currentYear)}</p> <p class="credits svelte-g0q3jr" data-svelte-h="svelte-ecd0tj">designed and developed by Musab Hassan<br class="svelte-g0q3jr">  <a class="clickable button no-decor svelte-g0q3jr" href="https://github.com/Musab-Hassan/musabhassan.com" target="_blank">this website is open source on github</a></p></div></div>  <div class="flex-wrapper decor svelte-g0q3jr" data-svelte-h="svelte-1lrer4p"> <svg id="signature" class="name-signature svelte-g0q3jr" x="0px" y="0px" viewBox="0 0 190 136.9" style="stroke: rgb(79, 78, 85);"></svg></div> </div>`;
});
const css$2 = {
  code: ".dot-container.svelte-1l3lcu7.svelte-1l3lcu7{position:fixed;display:block;top:0;left:0;z-index:1000;mix-blend-mode:exclusion;pointer-events:none;will-change:width, height}.dot-container.svelte-1l3lcu7 .dot.svelte-1l3lcu7{position:relative;width:0;height:0;border-radius:50%;background-color:white;transform:translate(-50%, -50%);transform:-webkit-translate(-50%, -50%);transform:-moz-translate(-50%, -50%);transition:width 0.5s ease, height 0.5s ease;-webkit-transition:width 0.5s ease, height 0.5s ease}.dot-container.active.svelte-1l3lcu7 .dot.svelte-1l3lcu7{width:4vh;height:4vh}.dot-container.disabled.svelte-1l3lcu7 .dot.svelte-1l3lcu7{width:0 !important;height:0 !important}.dot-container.hover.svelte-1l3lcu7 .dot.svelte-1l3lcu7{width:7.5vh;height:7.5vh}",
  map: null
};
const Cursor_dot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isMobile;
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => value);
  isWorkScroll.subscribe((val) => val);
  $$result.css.add(css$2);
  $$unsubscribe_isMobile();
  return ` ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(_) {
      return ` <div class="${[
        "dot-container active svelte-1l3lcu7",
        " disabled"
      ].join(" ").trim()}" data-svelte-h="svelte-1kqyv5l"><div class="dot svelte-1l3lcu7"></div></div> `;
    }();
  }(loadPagePromise)}`;
});
const css$1 = {
  code: ".page-cover.svelte-1995pyy.svelte-1995pyy{width:100vw;height:100vh;position:fixed;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:1000;background-color:#222224}.page-cover.svelte-1995pyy .loader-wrapper.svelte-1995pyy{position:relative;display:block;height:0.1rem;width:20rem}.page-cover.svelte-1995pyy .loader-wrapper .loader.svelte-1995pyy,.page-cover.svelte-1995pyy .loader-wrapper .loader-background.svelte-1995pyy{position:absolute;top:0;height:100%}.page-cover.svelte-1995pyy .loader-wrapper .loader-background.svelte-1995pyy{width:100%;background-color:rgba(255, 255, 255, 0.1)}.page-cover.svelte-1995pyy .loader-wrapper .loader.svelte-1995pyy{background-color:white;transition:width 0.8s ease}.page-cover.svelte-1995pyy .loader-wrapper .outro.svelte-1995pyy{transition:width 0.8s ease;right:0 !important;width:0}",
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_imgPromises;
  $$unsubscribe_imgPromises = subscribe(imgPromises, (value) => value);
  let loader;
  let loadingPercentage = 0;
  $$result.css.add(css$1);
  $$unsubscribe_imgPromises();
  return `<div class="page-cover svelte-1995pyy"><div class="loader-wrapper svelte-1995pyy"><div class="${["loader-background svelte-1995pyy", ""].join(" ").trim()}"></div> <div class="${["loader svelte-1995pyy", ""].join(" ").trim()}" style="${"width: " + escape(loadingPercentage, true) + "%"}"${add_attribute("this", loader, 0)}></div></div> </div>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");@import url("https://use.typekit.net/goc4cow.css");canvas{position:absolute;top:0;left:0;z-index:-1}body{background-color:#999999;overflow:hidden;color:white;margin:0;padding:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:"Questrial", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif}*{margin:0;padding:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}#scroll-frame.svelte-znp38u{top:0;left:0;width:100%;height:100vh;position:relative;overflow:hidden auto}#nav-bar.svelte-znp38u{position:fixed;top:10vh;z-index:100}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_slickScrollInstance;
  let $$unsubscribe_imgPromises;
  $$unsubscribe_slickScrollInstance = subscribe(slickScrollInstance, (value) => value);
  $$unsubscribe_imgPromises = subscribe(imgPromises, (value) => value);
  let scrollContainer, navBar;
  $$result.css.add(css);
  $$unsubscribe_slickScrollInstance();
  $$unsubscribe_imgPromises();
  return ` ${validate_component(Cursor_dot, "CursorDot").$$render($$result, {}, {}, {})}  ${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`} <div id="scroll-frame" class="svelte-znp38u"${add_attribute("this", scrollContainer, 0)}> <div id="nav-bar" class="svelte-znp38u"${add_attribute("this", navBar, 0)}>${validate_component(Nav, "NavComponent").$$render($$result, { scrollContainer }, {}, {})}</div>  ${validate_component(Home, "HomeSection").$$render($$result, {}, {}, {})} ${validate_component(Work, "WorkSection").$$render($$result, {}, {}, {})} ${validate_component(About, "AboutSection").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
