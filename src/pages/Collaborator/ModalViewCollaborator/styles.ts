import styled from 'styled-components';

export const Container = styled.div``;


/* const handleSubmit = useCallback(async (data: Omit<ICollaborator, 'id'>) => {
  try {
    formRef.current?.setErrors({});
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome e Obrigatório'),
      image_url: Yup.string().required('A imagem e Obrigatária'),
      id_office: Yup.number().required('O cargo e obrigatório'),
      id_team: Yup.number().required('O time e obrigatório'),
      competence: Yup.array().min(1),
      contacts: Yup.object().shape({
        type: Yup.string(),
        contact: Yup.string(),
      }),
      address: Yup.string().required('O endereço e obrigatório'),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    handleAddCollaborator(data);
    setIsOpen();
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
      return;
    }

    addToast({
      type: 'error',
      title: 'Erro ao cadastrar colaborador.',
      description:
        'Ocorreu um erro ao cadastrar o colaborador, tente novamente mais tarde',
    });
  }
}, []); */
