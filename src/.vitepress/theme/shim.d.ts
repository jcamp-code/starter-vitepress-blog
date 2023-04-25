// only needed if you're using custom vue components

declare const __VUE_PROD_DEVTOOLS__: boolean

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
