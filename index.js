const superbowlWin = (record) => {
    const winResult = record.find((record) => record.result === "W");

    if (winResult) {
        return winResult.year;
    } else {
        return undefined;
    }
};
