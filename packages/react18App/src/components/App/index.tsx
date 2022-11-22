import {Button, Modal} from 'antd';
import {useCallback, useState} from "react";

const App = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback(
        () => setOpen(true),
        []
    )
    const handleClose = useCallback(
        () => setOpen(false),
        []
    )

    return (
        <>
            <Button onClick={handleOpen}>打开弹窗</Button>
            <div style={{height: '200vh', background: 'lightgray'}}></div>
            <Modal
                open={open}
                onOk={handleClose}
                onCancel={handleClose}
            >
                xxx
            </Modal>
        </>
    );
};

export default App
