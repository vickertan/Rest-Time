import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Markdown from "react-markdown";

export default function InfoButton() {
    const [open, setOpen] = useState(false);

    const [content, setContent] = useState();

    useEffect(() => {
        fetch("./assets/info.md")
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <div className="info">
            <InfoIcon
                color="info"
                fontSize="large"
                onClick={() => {
                    setOpen(true);
                }}
            />
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box
                        sx={{
                            position: "absolute",
                            height: "50%",
                            width: "70%",
                            maxWidth: "400px",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            bgcolor: "beige",
                            border: "2px solid #000",
                            boxShadow: 24,
                            p: 4,
                            outline: 0,
                            overflow: "scroll",
                        }}
                    >
                        <Markdown>{content}</Markdown>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
