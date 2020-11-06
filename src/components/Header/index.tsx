import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <button type="button" onClick={signOut}>
        <FiLogOut size={20} />
      </button>
    </Container>
  );
};

export default Header;
