import React from 'react';

/**
 * Componente Modal Reutilizável
 * Usado para avisos, erros e confirmações
 */
export function Modal({
  isOpen,
  title,
  message,
  type = 'info', // 'info', 'warning', 'error', 'success'
  primaryButtonText = 'OK',
  secondaryButtonText = null,
  onPrimaryClick,
  onSecondaryClick,
  onClose,
  children,
}) {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'success':
        return '✅';
      case 'info':
      default:
        return 'ℹ️';
    }
  };

  const getTypeClass = () => {
    switch (type) {
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'success':
        return 'success';
      case 'info':
      default:
        return 'info';
    }
  };

  return (
    <div className="modal-overlay">
      <div className={`modal-card modal-${getTypeClass()}`}>
        <div className="modal-header">
          <h2>
            <span className="modal-icon">{getIcon()}</span>
            {title}
          </h2>
          <button
            className="modal-close"
            onClick={onClose || onPrimaryClick}
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          {message && <p className="modal-message">{message}</p>}
          {children && <div className="modal-content">{children}</div>}
        </div>

        <div className="modal-footer">
          {secondaryButtonText && (
            <button
              className="modal-btn cancel"
              onClick={onSecondaryClick || onClose}
            >
              {secondaryButtonText}
            </button>
          )}
          <button
            className={`modal-btn confirm modal-btn-${getTypeClass()}`}
            onClick={onPrimaryClick}
            autoFocus
          >
            {primaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
