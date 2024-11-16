import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import homeIcon from '../images/home-icon.png'
import searchIcon from '../images/search.icon.png'
import sumIcon from '../images/sum-icon.png'
import StaffEditModal from './Modal/StaffEditModal'
import searchBoard from '../css/searchBoard.css'


function SearchBoard() {
    const navigate = useNavigate()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    function closeModal(){
        setIsEditModalOpen(false)
    }

    function addRow() {
        setIsEditModalOpen(true)
    }
    return (
        <>
        <section className='searchBoard'>
            {/* Nav Dashboard */}
            <a className='homeBtn' onClick={() => navigate('/dashboard')}><img src={homeIcon}></img></a>
            <section className='searchBar'>
                <img src={searchIcon} alt='Icon de Busca'></img>
                <input type='text' placeholder='Procurar...' ></input>
            </section>
            <section className='addRowBtn' onClick={addRow}>
                <img src={sumIcon}></img>
            </section>
        </section>
        {/* Modal de Edição */}
            {isEditModalOpen && (
                <StaffEditModal
                    isOpen={isEditModalOpen}
                    closeModal={closeModal}
                    rowData={{}} // Passe os dados necessários, ou um objeto vazio
                />
            )}
        </>
    )
}

export default SearchBoard 