import SubCategories from "./SubCategories";
import Templates from "./Templates";

export default function Home() {
    return (
        <table class='gallery-page' style={{
            width: '100vw',
        }}>
            <tbody>
                <tr>
                    <td className="col-1" style={{
                        width: '20vw',
                    }}>
                        <SubCategories />
                    </td>
                    <td className="col-2" style={{
                        width: '80vw',
                    }}>
                        <Templates />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}