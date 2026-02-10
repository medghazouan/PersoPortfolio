// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-2xl font-semibold mb-4" {...props} />,
    h2: (props) => <h2 className="text-xl font-semibold mt-6 mb-3" {...props} />,
    p: (props) => <p className="text-sm leading-relaxed text-slate-200 mb-3" {...props} />,
    li: (props) => <li className="text-sm leading-relaxed text-slate-200" {...props} />,
    ...components,
  }
}
