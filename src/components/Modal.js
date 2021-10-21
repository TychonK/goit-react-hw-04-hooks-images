export function Modal({ imgUrl, closeModalOverlay }) {
    const closeModal = () => {
        let modalIsOpen = false;
        closeModalOverlay(modalIsOpen);
    }
    return (
            <div className="Overlay" onClick={closeModal}>
                <div className="Modal">
                    <img src={imgUrl} alt="Big image" />
                </div>
            </div>
        ) 
}