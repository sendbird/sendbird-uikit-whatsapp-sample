import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function fixSendbirdCss() {
  return {
    name: 'fix-sendbird-css',
    enforce: 'pre',
    transform(code, id) {
      if (id.includes('@sendbird/uikit-react') && id.endsWith('.css')) {
        const lines = code.split('\n');
        const imports = [];
        const rest = [];
        for (const line of lines) {
          if (line.trim().startsWith('@import ')) {
            imports.push(line);
          } else {
            rest.push(line);
          }
        }
        return imports.join('\n') + '\n' + rest.join('\n');
      }
    },
  };
}

export default defineConfig({
  plugins: [fixSendbirdCss(), react()],
  server: {
    port: 3000,
    open: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
