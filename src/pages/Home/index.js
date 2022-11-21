import Categories from "./Categories";
import Images from "./Images";
import ModalPreview from "./ModalPreview";

export default function Home() {
    return (
        <>
            <table className='gallery-page' style={{
                width: '100vw',
            }}>
                <tbody>
                    <tr>
                        <td className="col-1" style={{
                            width: '20vw',
                            verticalAlign: 'top',
                        }}>
                            <Categories />
                        </td>
                        
                        <td style={{
                            width: '75vw',
                        }}>
                            <Images />
                        </td>
                    </tr>
                </tbody>
            </table>
            <ModalPreview />
        </>
    );
}