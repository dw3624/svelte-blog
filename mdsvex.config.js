import { escapeSvelte } from 'mdsvex'
import shiki from 'shiki'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatexSvelte from 'rehype-katex-svelte'
import rehypeSlug from 'rehype-slug'
import remarkAbbr from 'remark-abbr'
import remarkMath from 'remark-math'


/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
  smartypants:{
    dashes: 'oldschool'
  },
  remarkPlugins: [remarkAbbr, remarkMath],
  rehypePlugins: [rehypeKatexSvelte, rehypeSlug, [rehypeAutolinkHeadings, {behavior: 'wrap'}]],
  highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({ theme: 'dark-plus' })
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
			return `{@html \`${html}\` }`
		}
	},
}

export default mdsvexOptions
