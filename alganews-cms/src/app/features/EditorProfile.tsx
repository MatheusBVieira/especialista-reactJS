import { transparentize } from "polished";
import styled from "styled-components";
import FieldDescriptor from "../components/FieldDescriptor/FieldDescriptor";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

interface EditorProfileProps {
  hidePersonalData?: boolean;
}

function EditorProfile (props: EditorProfileProps) {
  return <EditorProfileWrapper>
    <EditorHeadline>
      <Avatar src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'} />
      <Name>Daniel Bonifacio</Name>
      <Description>Editor há 5 anos</Description>
    </EditorHeadline>

    <Divisor />
    
    <EditorFeatures>
      <PersonalInfo>
        <Biography>{'Ana Castillo é especialista em recrutamento de desenvolvedores e ama escrever dicas para ajudar os devs a encontrarem a vaga certa para elas. Atualmente tem uma empresa de Recruitment e é redatora no alga content'}</Biography>
        <Skills>
          <ProgressBar progress={96} title={'JavaScript'} theme={'primary'} />
          <ProgressBar progress={86} title={'React'} theme={'primary'} />
          <ProgressBar progress={67} title={'Node'} theme={'primary'} />
        </Skills>
      </PersonalInfo>
      <ContactInfo>
        <FieldDescriptor field={'Cidade'} value={'Vila Velha'} />
        <FieldDescriptor field={'Estado'} value={'Espírito Santo'} />
        {
          !props.hidePersonalData && <>
            <FieldDescriptor field={'Telefone'} value={'+55 27 99900-9999'} />
            <FieldDescriptor field={'Email'} value={'ana.castillo@redacao.algacontent.com'} />
            <FieldDescriptor field={'Nascimento'} value={'26 de Dezembro de 1997 (22 anos)'} />
          </>
        }
      </ContactInfo>
    </EditorFeatures>
    {
      !props.hidePersonalData && <EditorEarnings>
        <ValueDescriptor color={'default'} value={21452} description={'Palavras nesta semana'} />
        <ValueDescriptor color={'default'} value={123234} description={'Palavras no mês'} />
        <ValueDescriptor color={'default'} value={12312312} description={'Total de palavras'} />
        <ValueDescriptor color={'primary'} value={545623.23} description={'Ganhos na semana'} isCurrency />
        <ValueDescriptor color={'primary'} value={545623.23} description={'Ganhos no mês'} isCurrency />
        <ValueDescriptor color={'primary'} value={545623.23} description={'Ganhos no total'} isCurrency />
      </EditorEarnings>
    }
  </EditorProfileWrapper>
}

const EditorProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px;
  border: 1px solid ${transparentize(0.9, '#274060')};
`

const EditorHeadline = styled.div`
  display: grid;
  align-items: center;
  gap: 8px 16px;
  grid-template-rows: 2;
  grid-template-columns: 48px auto;
  height: 48px;
`

const Avatar = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  object-fit: contain;
  width: 48px;
  height: 48px;
`

const Name = styled.h1`
  font-size: 18px;
  font-weight: 400;
  grid-column-start: 2;
` 

const Description = styled.span`
  font-size: 12px;
  grid-column-start: 2;
` 

const Divisor = styled.div`
  border-bottom: 1px solid  ${transparentize(0.9, '#274060')};
`

const EditorFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  gap: 24px;
`

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Biography = styled.p`
  font-size: 12px;
  line-height: 20px;
`

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 0;

  >* {
    width: 100%;
  }

  &>:nth-child(1),
  &>:nth-child(2) {
    width: 50%;
  }
`

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const EditorEarnings = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 24px;
`

export default EditorProfile