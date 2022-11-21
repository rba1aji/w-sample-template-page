import Categories from "./Categories";
import SubCategories from "./SubCategories";
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
                            width: '12.5vw',
                            verticalAlign: 'top',
                        }}>
                            <Categories />
                        </td>
                        <td className="col-2" style={{
                            width: '12.5vw',
                            verticalAlign: 'top',
                        }}>
                            <SubCategories />
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