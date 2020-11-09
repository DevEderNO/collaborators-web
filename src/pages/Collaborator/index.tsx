import React, { useCallback, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { ICollaborator } from '../../@types/collaborator';
import Button from '../../components/Button';
import Header from '../../components/Header';
import api from '../../services/api';
import ModalViewCollaborator from './ModalViewCollaborator';

import { Container, Content } from './styles';

const Collaborator: React.FC = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editCollaborator, setEditCollaborator] = useState({} as ICollaborator);

  const toggleEditModal = useCallback(() => {
    setEditModalOpen(!editModalOpen);
  }, [editModalOpen]);

  const handleEditCollaborator = useCallback(
    (collaborator: ICollaborator) => {
      setEditCollaborator(collaborator);
      toggleEditModal();
    },
    [toggleEditModal],
  );

  const handleDeleteCollaborator = useCallback((id: number) => {
    console.log('object');
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Content>
          <header>
            <Button icon={FaCheck} iconSize={24}>
              Salvar
            </Button>
          </header>
          <section>oi</section>
          <footer>oi</footer>
        </Content>
      </Container>
      <ModalViewCollaborator
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        handleEditCollaborator={handleEditCollaborator}
        handleDeleteCollaborator={handleDeleteCollaborator}
      />
    </>
  );
};

export default Collaborator;
