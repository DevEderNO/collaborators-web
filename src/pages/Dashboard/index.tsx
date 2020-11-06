import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import Button from '../../components/Button';
import Search from '../../components/Search';

import {
  Container,
  Content,
  ButtonFilter,
  CollaboratorsList,
  CollaboratorsItem,
} from './styles';
import Header from '../../components/Header';

const filters = [
  { type: 'name', label: 'Nome' },
  { type: 'office', label: 'Cargo' },
  { type: 'competence', label: 'Competência' },
  { type: 'team', label: 'Time' },
];

const Dashboard: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('name');
  const history = useHistory();

  const handleSelectedFilter = useCallback((filter: string) => {
    setSelectedFilter(filter);
  }, []);

  const handleToNewCollaborator = useCallback(() => {
    history.push('/collaborator');
  }, [history]);

  const handleSearchCollaborators = useCallback((term) => {
    console.log(term);
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <header>
          <h1>Colaboradores</h1>
          <div>
            <Search
              name="search"
              onSearch={handleSearchCollaborators}
              placeholder="Pesquisar colaboradores"
            />
            <Button
              icon={FaPlus}
              iconSize={24}
              onClick={handleToNewCollaborator}
            >
              Novo
            </Button>
          </div>
          <div>
            {filters.map((filter) => (
              <ButtonFilter
                selected={selectedFilter === filter.type}
                key={filter.type}
                onClick={() => handleSelectedFilter(filter.type)}
              >
                {filter.label}
              </ButtonFilter>
            ))}
          </div>
        </header>
        <section>
          <CollaboratorsList>
            <CollaboratorsItem>
              <img
                src="https://avatars0.githubusercontent.com/u/15367721?s=460&u=e81df1f2b1fed8d70b9580b46cf7fa25cbe36b07&v=4"
                alt="Eder"
              />
              <div>
                <h3>Eder Neves</h3>
                <p>Desenvolvedor</p>
                <span>Chapter Back-end</span>
              </div>
            </CollaboratorsItem>
            <CollaboratorsItem>
              <img
                src="https://avatars0.githubusercontent.com/u/15367721?s=460&u=e81df1f2b1fed8d70b9580b46cf7fa25cbe36b07&v=4"
                alt="Eder"
              />
              <div>
                <h3>Eder Neves</h3>
                <p>Desenvolvedor</p>
                <span>Chapter Back-end</span>
              </div>
            </CollaboratorsItem>
            <CollaboratorsItem>
              <img
                src="https://avatars0.githubusercontent.com/u/15367721?s=460&u=e81df1f2b1fed8d70b9580b46cf7fa25cbe36b07&v=4"
                alt="Eder"
              />
              <div>
                <h3>Eder Neves</h3>
                <p>Desenvolvedor</p>
                <span>Chapter Back-end</span>
              </div>
            </CollaboratorsItem>
            <CollaboratorsItem>
              <img
                src="https://avatars0.githubusercontent.com/u/15367721?s=460&u=e81df1f2b1fed8d70b9580b46cf7fa25cbe36b07&v=4"
                alt="Eder"
              />
              <div>
                <h3>Eder Neves</h3>
                <p>Desenvolvedor</p>
                <span>Chapter Back-end</span>
              </div>
            </CollaboratorsItem>
            <CollaboratorsItem>
              <img
                src="https://avatars0.githubusercontent.com/u/15367721?s=460&u=e81df1f2b1fed8d70b9580b46cf7fa25cbe36b07&v=4"
                alt="Eder"
              />
              <div>
                <h3>Eder Neves</h3>
                <p>Desenvolvedor</p>
                <span>Chapter Back-end</span>
              </div>
            </CollaboratorsItem>
          </CollaboratorsList>
        </section>
        <footer>
          <button type="button">mais</button>
        </footer>
      </Content>
    </Container>
  );
};

export default Dashboard;
