import { ListGroup } from 'react-bootstrap';
import { AppState } from '../../reducers/AppContext';

export default function View() {

    const { views, selectedView, setSelectedView } = AppState();

    const handleViewClick = (view) => {
        setSelectedView(view);
        console.log(view, "view selected");
    }

    return (
        <>
            <ListGroup className='ms-5' horizontal>
                {
                    Object.keys(views).map((view, index) => {
                        return (
                            <ListGroup.Item key={index}
                                style={{ color: '#fff', background: 'transparent', border: selectedView === view ? '1px solid #fff' : 'none' }}
                                onClick={() => handleViewClick(view)}
                                as={'button'}
                            >
                                {views[view]}
                            </ListGroup.Item>
                        );
                    })
                }
            </ListGroup>
        </>
    );
}