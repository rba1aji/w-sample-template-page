import Search from '../../components/Search';
import { Link } from 'react-router-dom';

export default function TemplatesPageHeader(props) {
    const {
        searchQuery, setSearchQuery, selectedCategoryName
    } = props;

    return (
        <table className='templatespg-header'
            style={{ width: '100%' }}
        >
            <tbody><tr>
                <td className='mb-0 ps-5 h3 fw-bold'>
                    <Link to="/">Category </Link> / {selectedCategoryName}
                </td>
                <td
                    style={{ width: '30%' }}
                    className='text-end pe-5'
                >
                    <Search
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        placeholder={'search templates'}
                    />
                </td>
            </tr></tbody>
        </table>
    );
}