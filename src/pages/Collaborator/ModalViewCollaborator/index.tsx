import React, { useCallback, useRef } from 'react';
import { FiDelete, FiEdit, FiSkipBack } from 'react-icons/fi';
import { ICollaborator } from '../../../@types/collaborator';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import { useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleEditCollaborator: (collaborator: ICollaborator) => void;
  handleDeleteCollaborator: (id: number) => void;
}

const ModalViewCollaborator: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleDeleteCollaborator,
  handleEditCollaborator,
}) => {
  const { addToast } = useToast();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <header>
          <Button icon={FiSkipBack} iconSize={24}>
            Salvar
          </Button>
          <Button icon={FiEdit} iconSize={24}>
            Salvar
          </Button>
          <Button icon={FiDelete} iconSize={24}>
            Salvar
          </Button>
        </header>
        <section>oi</section>
        <footer>oi</footer>
      </Container>
    </Modal>
  );
};

export default ModalViewCollaborator;
