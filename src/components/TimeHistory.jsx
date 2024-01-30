import { useState } from "react";
import convToMilTime from "../func/convToMilTime";
import calcMinsUsed from "../func/calcMinsUsed";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TimeHistory({
    totalMinsLimit, //new
    timeList,
    setTimeList,
    totalMinsLeft,
    setTotalMinsLeft, //new
    totalMinsUsed,
    setTotalMinsUsed,
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
            setTotalMinsUsed(0);
            setTotalMinsLeft(totalMinsLimit); //new
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
                            <Record
                                key={index}
                                time={time}
                                id={index}
                                timeList={timeList}
                                setTimeList={setTimeList}
                                totalMinsUsed={totalMinsUsed}
                                setTotalMinsUsed={setTotalMinsUsed}
                                totalMinsLeft={totalMinsLeft} //new
                                setTotalMinsLeft={setTotalMinsLeft} //new
                            />
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

function Record({
    time,
    id,
    timeList,
    setTimeList,
    totalMinsUsed,
    setTotalMinsUsed,
    totalMinsLeft, //new
    setTotalMinsLeft, //new
}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <div id={id} className="record">
            <button
                className="sequence"
                onClick={(e) => {
                    setAnchorEl(e.currentTarget);
                }}
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
                onClose={handleCloseMenu}
            >
                <MenuItem
                    id="deleteCurRec"
                    onClick={() => {
                        let target = timeList[id];
                        let targetMinUsed = calcMinsUsed(target.out, target.in);
                        setTotalMinsUsed(totalMinsUsed - targetMinUsed);
                        setTotalMinsLeft(totalMinsLeft + targetMinUsed); //new
                        setTimeList(timeList.filter((time) => time !== target));
                        handleCloseMenu();
                    }}
                >
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                </MenuItem>
            </Menu>
        </div>
    );
}
