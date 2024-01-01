import { useState } from "react";
import convToMilTime from "../func/convToMilTime";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TimeHistory({
    hourLimit,
    minsLimit,
    timeList,
    setTimeList,
    setHourLeft,
    setMinsLeft,
    totalMinsUsed,
    setTotalMinsUsed,
    setLimitStatus,
}) {
    function handleReset() {
        if (
            prompt(
                "Deleted record(s) can't be retrieved. Type 'clear' to proceed. (case-insensitive)"
            )
                .toLowerCase()
                .trim() === "clear"
        ) {
            setTimeList([]);
            setHourLeft(hourLimit);
            setMinsLeft(minsLimit);
            setTotalMinsUsed(0);
            setLimitStatus("safe");
        } else {
            alert("Record(s) delete failed");
        }
    }

    return (
        <div className="time-history">
            {!timeList.length ? (
                <p className="default">No record yet</p>
            ) : (
                <>
                    <button className="reset-button" onClick={handleReset}>
                        Clear
                    </button>
                    <div className="inner-history-box">
                        {timeList.map((time, index) => (
                            <Record time={time} id={index} key={index} />
                        ))}
                    </div>
                    <div className="total-box">
                        <p>Total time used : {convToMilTime(totalMinsUsed)}</p>
                    </div>
                </>
            )}
        </div>
    );
}

function Record({ time, id }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div id={id} className="record">
            <button
                className="sequence"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                {id + 1}
            </button>
            <div className="time-section">
                <p>Out. {time.out}</p>
                <hr />
                <p>In. {time.in}</p>
            </div>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                </MenuItem>
            </Menu>
        </div>
    );
}
