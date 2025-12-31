import { readFileSync, writeFileSync, copyFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const distPath = './dist';
const rootPath = './';

try {
  const distIndexPath = join(distPath, 'index.html');
  const rootIndexPath = join(rootPath, 'index.html');
  
  if (existsSync(distIndexPath)) {
    const distIndexContent = readFileSync(distIndexPath, 'utf-8');
    writeFileSync(rootIndexPath, distIndexContent, 'utf-8');
    console.log('✓ index.html copiado do dist para a raiz');
  } else {
    console.error('✗ dist/index.html não encontrado');
    process.exit(1);
  }
  
  const assetsPath = join(distPath, 'assets');
  const rootAssetsPath = join(rootPath, 'assets');
  
  if (existsSync(assetsPath)) {
    if (!existsSync(rootAssetsPath)) {
      mkdirSync(rootAssetsPath, { recursive: true });
    }
    
    const files = readdirSync(assetsPath);
    
    for (const file of files) {
      const srcPath = join(assetsPath, file);
      const destPath = join(rootAssetsPath, file);
      copyFileSync(srcPath, destPath);
    }
    
    console.log('✓ Arquivos de assets copiados para a raiz');
  }
  
  const publicFiles = ['azul.png', 'branco.png', 'favicon.ico', 'placeholder.svg', 'robots.txt', 'sitemap.xml'];
  
  for (const file of publicFiles) {
    const srcPath = join(distPath, file);
    const destPath = join(rootPath, file);
    
    if (existsSync(srcPath)) {
      copyFileSync(srcPath, destPath);
    }
  }
  
  console.log('✓ Arquivos públicos copiados para a raiz');
  console.log('✓ Build concluído e arquivos copiados para a raiz!');
} catch (error) {
  console.error('✗ Erro ao copiar arquivos:', error.message);
  process.exit(1);
}

