import { Books } from './dataRecents'
import { Title } from '../Title'
import CardRecomend from '../CardRecomend'
import imagemLivro from '../../imagens/livro2.png' 
import styled from 'styled-components'

const RecentsContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function Recents() {
    return (
        <RecentsContainer>
            <Title
                color="#EB9B00"
                fontSize="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Title>
            <NewContainer>
                {books.map( book => (
                    <img src={livro.src}/>
                ))}
            </NewContainer>
            <CardRecomend
                title="Talvez você se interesse por"
                subtitle="Angular 11"
                description="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </RecentsContainer>
    )
}

export default Recents