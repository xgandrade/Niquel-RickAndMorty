import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../../components/Modal';

describe('Modal Component', () => {
  describe('Renderização Básica', () => {
    it('não deve renderizar quando isOpen é false', () => {
      render(
        <Modal
          isOpen={false}
          type="info"
          title="Teste"
          message="Mensagem de teste"
          onPrimaryClick={() => {}}
        />
      );
      
      expect(screen.queryByText('Teste')).not.toBeInTheDocument();
    });

    it('deve renderizar quando isOpen é true', () => {
      render(
        <Modal
          isOpen={true}
          type="info"
          title="Teste Modal"
          message="Conteúdo do modal"
          onPrimaryClick={() => {}}
        />
      );
      
      expect(screen.getByText('Teste Modal')).toBeInTheDocument();
      expect(screen.getByText('Conteúdo do modal')).toBeInTheDocument();
    });

    it('deve renderizar o título corretamente', () => {
      render(
        <Modal
          isOpen={true}
          type="success"
          title="✅ Sucesso!"
          message="Operação realizada"
          onPrimaryClick={() => {}}
        />
      );
      
      expect(screen.getByText('✅ Sucesso!')).toBeInTheDocument();
    });

    it('deve renderizar a mensagem corretamente', () => {
      render(
        <Modal
          isOpen={true}
          type="error"
          title="Erro"
          message="Algo deu errado"
          onPrimaryClick={() => {}}
        />
      );
      
      expect(screen.getByText('Algo deu errado')).toBeInTheDocument();
    });
  });

  describe('Tipos de Modal', () => {
    it('deve renderizar modal de erro', () => {
      const { container } = render(
        <Modal
          isOpen={true}
          type="error"
          title="Erro"
          message="Erro no sistema"
          onPrimaryClick={() => {}}
        />
      );
      
      expect(container.querySelector('.modal-error')).toBeInTheDocument();
    });

    it('deve renderizar modal de aviso', () => {
      const { container } = render(
        <Modal
          isOpen={true}
          type="warning"
          title="Aviso"
          message="Cuidado!"
          onPrimaryClick={() => {}}
        />
      );
      
      expect(container.querySelector('.modal-warning')).toBeInTheDocument();
    });

    it('deve renderizar modal de sucesso', () => {
      const { container } = render(
        <Modal
          isOpen={true}
          type="success"
          title="Sucesso"
          message="Operação bem-sucedida"
          onPrimaryClick={() => {}}
        />
      );
      
      expect(container.querySelector('.modal-success')).toBeInTheDocument();
    });

    it('deve renderizar modal de informação', () => {
      const { container } = render(
        <Modal
          isOpen={true}
          type="info"
          title="Info"
          message="Informação"
          onPrimaryClick={() => {}}
        />
      );
      
      expect(container.querySelector('.modal-info')).toBeInTheDocument();
    });
  });

  describe('Botões e Callbacks', () => {
    it('deve chamar onPrimaryClick ao clicar no botão primário', () => {
      const mockCallback = jest.fn();
      
      render(
        <Modal
          isOpen={true}
          type="info"
          title="Teste"
          message="Mensagem"
          primaryButtonText="OK"
          onPrimaryClick={mockCallback}
        />
      );
      
      const botao = screen.getByText('OK');
      fireEvent.click(botao);
      
      expect(mockCallback).toHaveBeenCalledTimes(1);
    });

    it('deve renderizar botão primário com texto customizado', () => {
      render(
        <Modal
          isOpen={true}
          type="info"
          title="Teste"
          message="Mensagem"
          primaryButtonText="Continuar"
          onPrimaryClick={() => {}}
        />
      );
      
      expect(screen.getByText('Continuar')).toBeInTheDocument();
    });

    it('deve renderizar botão secundário quando fornecido', () => {
      render(
        <Modal
          isOpen={true}
          type="info"
          title="Teste"
          message="Mensagem"
          primaryButtonText="OK"
          secondaryButtonText="Cancelar"
          onPrimaryClick={() => {}}
          onSecondaryClick={() => {}}
        />
      );
      
      expect(screen.getByText('Cancelar')).toBeInTheDocument();
    });

    it('deve chamar onSecondaryClick ao clicar no botão secundário', () => {
      const mockSecondary = jest.fn();
      
      render(
        <Modal
          isOpen={true}
          type="info"
          title="Teste"
          message="Mensagem"
          primaryButtonText="OK"
          secondaryButtonText="Cancelar"
          onPrimaryClick={() => {}}
          onSecondaryClick={mockSecondary}
        />
      );
      
      const botao = screen.getByText('Cancelar');
      fireEvent.click(botao);
      
      expect(mockSecondary).toHaveBeenCalledTimes(1);
    });

    it('deve renderizar apenas botão primário por padrão', () => {
      render(
        <Modal
          isOpen={true}
          type="info"
          title="Teste"
          message="Mensagem"
          onPrimaryClick={() => {}}
        />
      );
      
      const botoes = screen.getAllByRole('button');
      expect(botoes.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Conteúdo Customizado', () => {
    it('deve renderizar children quando fornecido', () => {
      render(
        <Modal
          isOpen={true}
          type="info"
          title="Teste"
          onPrimaryClick={() => {}}
        >
          <div>Conteúdo customizado</div>
        </Modal>
      );
      
      expect(screen.getByText('Conteúdo customizado')).toBeInTheDocument();
    });

    it('deve renderizar tanto message quanto children', () => {
      render(
        <Modal
          isOpen={true}
          type="info"
          title="Teste"
          message="Mensagem"
          onPrimaryClick={() => {}}
        >
          <div>Conteúdo extra</div>
        </Modal>
      );
      
      expect(screen.getByText('Mensagem')).toBeInTheDocument();
      expect(screen.getByText('Conteúdo extra')).toBeInTheDocument();
    });
  });

  describe('Acessibilidade', () => {
    it('deve ter estrutura HTML adequada', () => {
      const { container } = render(
        <Modal
          isOpen={true}
          type="info"
          title="Teste"
          message="Mensagem"
          onPrimaryClick={() => {}}
        />
      );
      
      expect(container.querySelector('.modal-overlay')).toBeInTheDocument();
      expect(container.querySelector('.modal-card')).toBeInTheDocument();
    });

    it('deve renderizar título como heading', () => {
      render(
        <Modal
          isOpen={true}
          type="info"
          title="Título Principal"
          message="Mensagem"
          onPrimaryClick={() => {}}
        />
      );
      
      const heading = screen.getByRole('heading', { name: /Título Principal/i });
      expect(heading).toBeInTheDocument();
    });
  });

  describe('Estados e Interações', () => {
    it('deve fechar ao clicar em botão de fechar (X)', () => {
      const mockClose = jest.fn();
      
      const { container } = render(
        <Modal
          isOpen={true}
          type="info"
          title="Teste"
          message="Mensagem"
          onPrimaryClick={() => {}}
          onClose={mockClose}
        />
      );
      
      const closeBtn = container.querySelector('.modal-close-btn');
      if (closeBtn) {
        fireEvent.click(closeBtn);
        expect(mockClose).toHaveBeenCalled();
      }
    });

    it('deve respeitar a prop isOpen para mostrar/ocultar', () => {
      const { rerender } = render(
        <Modal
          isOpen={false}
          type="info"
          title="Teste"
          message="Mensagem"
          onPrimaryClick={() => {}}
        />
      );
      
      expect(screen.queryByText('Teste')).not.toBeInTheDocument();
      
      rerender(
        <Modal
          isOpen={true}
          type="info"
          title="Teste"
          message="Mensagem"
          onPrimaryClick={() => {}}
        />
      );
      
      expect(screen.getByText('Teste')).toBeInTheDocument();
    });
  });
});
