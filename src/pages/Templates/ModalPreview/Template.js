import { AppState } from "../../../reducers/AppContext";

export default function Template() {
    const {
        selectedTemplate, selectedView
    } = AppState();

    const src = selectedTemplate[selectedView];
    const alt = selectedTemplate.name;
    const onError = (e) => {
        e.target.onerror = null;
        e.target.src = "https://via.placeholder.com/500x500.png?text=No+Preview+Available";
    }


    return (
        <>
            {
                selectedView === 'desktop' &&
                <img
                    src={src}
                    alt={alt}
                    style={{
                        display: 'block',
                        margin: 'auto',
                        width: '90%',
                        overflow: 'hidden',
                    }}
                    className='img-fluid '
                // onError={onError}
                // loading='lazy'
                />
            }
            {
                selectedView === 'mobile' &&
                <img src={src}
                    alt={alt}
                    style={{
                        display: 'block',
                        margin: 'auto',
                        width: '35%',
                        overflow: 'hidden',
                    }}
                    className='img-fluid'
                    onError={onError}
                // loading='lazy'
                />
            }
        </>
    );
}