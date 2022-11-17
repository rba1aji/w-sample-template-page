import Categories from "./Categories";
import Templates from "./Templates";

export default function Home() {
    return (
        <table class='gallery-page' style={{
            width: '100vw',
        }}>
            <tbody>
                <tr>
                    <td className="col-1" style={{
                        width: '25vw',
                        verticalAlign: 'top',
                    }}>
                        <Categories />
                    </td>
                    <td className="col-2" style={{
                        width: '75vw',
                    }}>
                        <Templates />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}