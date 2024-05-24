'use server'

import { promises as fs } from 'fs'
import path from 'path'
import { getHighlighter } from 'shiki'

export async function highlightCode(code: string) {
  const editorTheme = await fs.readFile(path.join(process.cwd(), 'lib/themes/dark.json'), 'utf-8')

  const highlighter = await getHighlighter({
    langs: ['shellscript'],
    themes: [],
  })

  await highlighter.loadTheme(JSON.parse(editorTheme))

  return highlighter.codeToHtml(code, {
    lang: 'shellscript',
    theme: 'Lambda Studio — Blackout',
  })
}
