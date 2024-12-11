import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { homeIcon, searchIcon, sumIcon } from '../../assets';
import './searchBoard.css'

function SearchBoard({ onInputChange, EditModal }) {
    const navigate = useNavigate();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        setInputValue(e.target.value)
        if (e.key === "Enter") {
        onInputChange(e.target.value)
        }
    };

    function closeModal() {
        setIsEditModalOpen(false);
    }

    function addRow() {
        setIsEditModalOpen(true);
    }

    return (
        <>
            <section className="searchBoard">
                <a className="homeBtn" onClick={() => navigate('/dashboard')}>
                    <img src={homeIcon} alt="Home Icon"></img>
                </a>
                <section className="searchBar">
                    <img src={searchIcon} alt="Icon de Busca" onClick={() => onInputChange(inputValue)}></img>
                    <input
                        type="text"
                        placeholder="Procurar..."
                        onKeyDown={handleKeyDown}
                    ></input>
                </section>
                <section className="addRowBtn" onClick={addRow}>
                    <img src={sumIcon} alt="Add Row Icon"></img>
                </section>
            </section>
            {isEditModalOpen && (
                <EditModal
                    isOpen={isEditModalOpen}
                    closeModal={closeModal}
                    rowData={{}}
                />
            )}
        </>
    );
}

export default SearchBoard;

