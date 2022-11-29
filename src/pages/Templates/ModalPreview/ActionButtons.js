import { AppState } from "../../../reducers/AppContext";

export default function ActionButtons() {
    const {
        selectedView, setSelectedView,
        selectedTemplate,
    } = AppState();

    const handleOnDownload = () => {
        fetch(selectedTemplate[selectedView], {
            method: "GET",
            headers: {},
            mode: 'no-cors'
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const imgtype = selectedTemplate[selectedView].split('.').pop();; 
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", `${selectedTemplate.name}.${imgtype}`);
                    document.body.appendChild(link);
                    link.click();
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    const actionButtons = [
        {
            name: 'Desktop',
            clickEvent: () => setSelectedView('desktop'),
            active: selectedView === 'desktop'
        },
        {
            name: 'Mobile',
            clickEvent: () => setSelectedView('mobile'),
            active: selectedView === 'mobile'
        },
        {
            name: 'Free download',
            clickEvent: handleOnDownload,
            active: false
        }
    ];

    return actionButtons;
}
