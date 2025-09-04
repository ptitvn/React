import { Spinner } from 'react-bootstrap';

function VerticalSpinners() {
    return (
        <div className="container mt-4 text-center">
            <div className="d-flex flex-column align-items-center gap-3 mt-3">

                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="secondary" />

            </div>
        </div>
    );
}

export default VerticalSpinners;