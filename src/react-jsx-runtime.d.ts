declare module 'react/jsx-runtime' {
  import type * as React from 'react'
  export const Fragment: React.ExoticComponent<{ children?: React.ReactNode }>
  export const jsx: (type: React.ElementType, props: unknown) => React.ReactElement
  export const jsxs: (type: React.ElementType, props: unknown) => React.ReactElement
  export namespace JSX {
    interface IntrinsicElements {
      [tag: string]: Record<string, unknown> | undefined
    }
    type Element = React.ReactNode
    interface ElementClass extends React.Component<unknown> {}
    interface ElementAttributesProperty {
      props: object
    }
    interface ElementChildrenAttribute {
      children: object
    }
  }
}
