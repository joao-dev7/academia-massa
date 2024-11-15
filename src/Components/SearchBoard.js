import { useNavigate } from 'react-router-dom';
import homeIcon from '../images/home-icon.png'
import searchIcon from '../images/search.icon.png'
import sumIcon from '../images/sum-icon.png'
import searchBoard from '../css/searchBoard.css'
function SearchBoard() {
    const navigate = useNavigate()
    function addRow() {
        /* TODO: Criar função de add lista e formulário */
    }
    return (
        <section className='searchBoard'>
            {/* Nav Dashboard */}
            <a className='homeBtn' onClick={() => navigate('/dashboard')}><img src={homeIcon}></img></a>
            <section className='searchBar'>
                <img src={searchIcon} alt='Icon de Busca'></img>
                <input type='text' placeholder='Procurar...' ></input>
            </section>
            <section className='addRowBtn' onClick={addRow()}>
                <img src={sumIcon}></img>
            </section>
        </section>
    )
}

export default SearchBoard 