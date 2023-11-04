import { gsap } from "gsap";

//https://www.phind.com/search?cache=kzf3gcsfm8cgsd1a99b3r8tl

const BASE_PATH = 'M 0 100 V 100 Q 50 100 100 100 V 100 z';
const animationProps = {
 duration: 0.8,
 ease: 'power4.in',
 attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' },
};

export function baseAnimation(overlayPath, attrArray) {
 const tl = gsap.timeline({});

 tl.set(overlayPath.current, {
   attr: { d: BASE_PATH },
 });

 attrArray.forEach((attr, index) => {
   tl.to(overlayPath.current, {
     ...animationProps,
     attr: attr,
   }, index * 0.3);
 });

 return tl;
}

export function svgCover(overlayPath) {
 const attrArray = [
   { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' },
   { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
 ];

 return baseAnimation(overlayPath, attrArray);
}

export function svgReveal(overlayPath) {
 const attrArray = [
   { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' },
   { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
 ];

 return baseAnimation(overlayPath, attrArray);
}

export const introSvgAnimation = (overlayPath) => {
 const tl = gsap.timeline();
 tl.add(() => svgCover(overlayPath));
 tl.add(() => svgReveal(overlayPath), '<+=1.3'); //1 second delay
}

export const reverseIntroSvgAnimation = (overlayPath) => {
 const attrArray = [
   { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' },
   { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
   { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' },
   { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' },
 ];

 return baseAnimation(overlayPath, attrArray);
}

export const pageTransitionAnimation = (overlayPath) => {
 const tl = gsap.timeline();
 tl.set(overlayPath.current, {
   attr: { d: BASE_PATH },
 });
 tl.add(() => svgReveal(overlayPath));
}