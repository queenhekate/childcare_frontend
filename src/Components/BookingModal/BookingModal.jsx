import './BookingModal.css';

function BookingModal() {
    return <div className="modal">
        <form className="modal__form">
            <h2 className="modal__title">Schedule Your Visit</h2>
            <button type="button" className="modal__close">CLOSE</button>
            {/* ToDo: Insert calendar here for selecting tour date and time */}
        </form>
        </div>
        }

export default BookingModal;