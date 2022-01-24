import { memo, useEffect, useState, useRef } from "react"
import { Snackbar as SnackbarMU, SnackbarContent } from "@material-ui/core";

const Snackbar = ({ alert }) => {
    const timer = useRef<any>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        
        if(alert) {
            setOpen(true);
            if (timer.current){
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                setOpen(false);
            }, 2000);
        }
        

    }, [alert]);

    const handleClickClose = () => {
        setOpen(false);
        clearTimeout(timer.current);
    }

    return (
        <SnackbarMU 
            open={open}
            anchorOrigin={{ vertical: "top", horizontal: "right"}}
        >
            <SnackbarContent message={alert} action={<button onClick={handleClickClose}>Close</button>} />
        </SnackbarMU>
    )
}

export default memo(Snackbar);