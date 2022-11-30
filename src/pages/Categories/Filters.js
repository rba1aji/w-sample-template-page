import Search from '../../components/Search';
import Select from './Select';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

export default function Filters(props) {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <>
            <div // filter expand button
                className="d-flex justify-content-end pe-4 me-4"
                style={{
                    transform: "translateY(-50px)",
                }}
            >
                <Button
                    className='px-4'
                    variant='outline-light'
                    onClick={() => setShowFilters(!showFilters)}
                    style={{
                        backgroundColor: showFilters ? "white" : "transparent",
                        color: showFilters ? "black" : "white",
                    }}
                    size='sm'
                >
                    <i className="bi bi-filter"> </i>
                    Filter
                </Button>
            </div>

            <table // filter options
                style={{
                    width: "50vw",
                    // width: "27.5vw",
                    display: showFilters ? "block" : "none",
                }}
            >
                <tbody>
                    <tr>{
                        [<Search {...props} />, <Select />]
                            .map((filter, index) => {
                                // if (index === 0) return null;
                                return (
                                    <td
                                        key={index}
                                        className='align-middle categories-filter'
                                        style={{ width: "50%" }}
                                    >
                                        {filter}
                                    </td>
                                );
                            })
                    }</tr>
                </tbody>
            </table>
        </>
    )
}