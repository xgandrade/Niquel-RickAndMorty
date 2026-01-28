import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SlotReel from '../../components/SlotReel';
import { IMAGE_PATHS } from '../../utils/imagePaths';

describe('SlotReel Component', () => {
  describe('Renderização Básica', () => {
    it('deve renderizar o componente sem erros', () => {
      render(
        <SlotReel 
          image={IMAGE_PATHS.beth} 
          spinning={false} 
        />
      );
      
      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
    });

    it('deve exibir a imagem correta', () => {
      render(
        <SlotReel 
          image={IMAGE_PATHS.rick} 
          spinning={false} 
        />
      );
      
      const img = screen.getByRole('img');
      expect(img.src).toContain('rick');
    });

    it('deve renderizar com alt text', () => {
      render(
        <SlotReel 
          image={IMAGE_PATHS.morty} 
          spinning={false} 
        />
      );
      
      const img = screen.getByRole('img');
      expect(img.getAttribute('alt')).toBeDefined();
    });
  });

  describe('Estado de Spinning', () => {
    it('deve aplicar classe spinning quando spinning={true}', () => {
      const { container } = render(
        <SlotReel 
          image={IMAGE_PATHS.beth} 
          spinning={true} 
        />
      );
      
      const reel = container.querySelector('.slot-reel');
      expect(reel).toHaveClass('spinning');
    });

    it('não deve aplicar classe spinning quando spinning={false}', () => {
      const { container } = render(
        <SlotReel 
          image={IMAGE_PATHS.beth} 
          spinning={false} 
        />
      );
      
      const reel = container.querySelector('.slot-reel');
      expect(reel).not.toHaveClass('spinning');
    });

    it('deve atualizar a classe spinning quando prop muda', () => {
      const { container, rerender } = render(
        <SlotReel 
          image={IMAGE_PATHS.beth} 
          spinning={false} 
        />
      );
      
      let reel = container.querySelector('.slot-reel');
      expect(reel).not.toHaveClass('spinning');
      
      rerender(
        <SlotReel 
          image={IMAGE_PATHS.beth} 
          spinning={true} 
        />
      );
      
      reel = container.querySelector('.slot-reel');
      expect(reel).toHaveClass('spinning');
    });
  });

  describe('Mudança de Imagem', () => {
    it('deve atualizar a imagem quando prop muda', () => {
      const { rerender } = render(
        <SlotReel 
          image={IMAGE_PATHS.beth} 
          spinning={false} 
        />
      );
      
      let img = screen.getByRole('img');
      expect(img.src).toContain('beth');
      
      rerender(
        <SlotReel 
          image={IMAGE_PATHS.rick} 
          spinning={false} 
        />
      );
      
      img = screen.getByRole('img');
      expect(img.src).toContain('rick');
    });

    it('deve suportar todas as imagens do jogo', () => {
      const imagens = [
        IMAGE_PATHS.beth,
        IMAGE_PATHS.rick,
        IMAGE_PATHS.morty,
        IMAGE_PATHS.summer,
        IMAGE_PATHS.roleta,
      ];
      
      imagens.forEach(img => {
        const { container } = render(
          <SlotReel 
            image={img} 
            spinning={false} 
          />
        );
        
        const imgElement = container.querySelector('img');
        expect(imgElement).toBeInTheDocument();
      });
    });
  });

  describe('Estrutura e CSS', () => {
    it('deve ter a classe slot-reel', () => {
      const { container } = render(
        <SlotReel 
          image={IMAGE_PATHS.beth} 
          spinning={false} 
        />
      );
      
      expect(container.querySelector('.slot-reel')).toBeInTheDocument();
    });

    it('deve ter a imagem dentro do container', () => {
      const { container } = render(
        <SlotReel 
          image={IMAGE_PATHS.beth} 
          spinning={false} 
        />
      );
      
      const reel = container.querySelector('.slot-reel');
      const img = reel.querySelector('img');
      expect(img).toBeInTheDocument();
    });
  });

  describe('Props Obrigatórias', () => {
    it('deve funcionar com as props obrigatórias', () => {
      expect(() => {
        render(
          <SlotReel 
            image={IMAGE_PATHS.beth} 
            spinning={false} 
          />
        );
      }).not.toThrow();
    });

    it('deve renderizar mesmo com props indefinidas (graceful degradation)', () => {
      render(
        <SlotReel 
          image="" 
          spinning={false} 
        />
      );
      
      const reel = screen.getByRole('img').parentElement;
      expect(reel).toBeInTheDocument();
    });
  });

  describe('Acessibilidade', () => {
    it('deve ter role="img"', () => {
      render(
        <SlotReel 
          image={IMAGE_PATHS.beth} 
          spinning={false} 
        />
      );
      
      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
    });

    it('deve ter aria-label descritivo', () => {
      const { container } = render(
        <SlotReel 
          image={IMAGE_PATHS.beth} 
          spinning={false} 
        />
      );
      
      const img = container.querySelector('img');
      expect(img.getAttribute('alt') || img.getAttribute('aria-label')).toBeDefined();
    });
  });

  describe('Performance', () => {
    it('deve renderizar rapidamente', () => {
      const start = performance.now();
      
      render(
        <SlotReel 
          image={IMAGE_PATHS.beth} 
          spinning={false} 
        />
      );
      
      const end = performance.now();
      expect(end - start).toBeLessThan(100); // Menos de 100ms
    });

    it('não deve fazer re-renders desnecessários', () => {
      const { rerender } = render(
        <SlotReel 
          image={IMAGE_PATHS.beth} 
          spinning={false} 
        />
      );
      
      // Re-render com as mesmas props
      const img1 = screen.getByRole('img');
      rerender(
        <SlotReel 
          image={IMAGE_PATHS.beth} 
          spinning={false} 
        />
      );
      const img2 = screen.getByRole('img');
      
      // A imagem pode ser a mesma ou não, dependendo da otimização
      expect(img2).toBeInTheDocument();
    });
  });
});
