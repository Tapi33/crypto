//Function to convert number to simple form, e.g 1200000 -> 1.2M
const convertNumber = (num) => {
    return Math.abs(Number(num)) >= 1.0e9
        ? (Math.abs(Number(num)) / 1.0e9).toFixed(2) + "B"
        : Math.abs(Number(num)) >= 1.0e6
        ? (Math.abs(Number(num)) / 1.0e6).toFixed(2) + "M"
        : Math.abs(Number(num)) >= 1.0e3
        ? (Math.abs(Number(num)) / 1.0e3).toFixed(2) + "K"
        : Math.abs(Number(num));
};

export default convertNumber;
